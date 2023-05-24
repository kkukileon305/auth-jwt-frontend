import axios, { AxiosError } from 'axios';
import useTokenStore from '@/store/token.store';
import { REFRESH_TOKEN_EXPIRED, TOKEN_EXPIRED } from '@/const/ErrorCode';
import { TokenResponse } from '@/types';
import { useModalStore } from '@/store/modal.store';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_DEV,
  headers: {
    Authorization: `Bearer ${useTokenStore.getState().token.accessToken}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  async (
    error: AxiosError<{
      message: string;
      statusCode: number;
    }>
  ) => {
    const { config, response } = error;

    if (!config) {
      return Promise.reject(error);
    }

    if (response?.data.statusCode === TOKEN_EXPIRED) {
      try {
        const { data: token } = await axios.post<TokenResponse>(
          'http://localhost:4000/api/auth/refresh',
          {},
          {
            headers: {
              Authorization: `Bearer ${
                useTokenStore.getState().token.refreshToken
              }`,
            },
          }
        );

        setAuthHeaderToken(token.accessToken);
        useTokenStore.getState().setToken(token);

        config.headers.Authorization = `Bearer ${token.accessToken}`;
        return api(config);
      } catch (e) {
        const refreshError = e as AxiosError<{
          message: string;
          statusCode: number;
        }>;

        if (refreshError.response?.data?.statusCode === REFRESH_TOKEN_EXPIRED) {
          setAuthHeaderToken('');
          useTokenStore.getState().setToken({
            accessToken: '',
            refreshToken: '',
            userId: '',
          });

          useModalStore.getState().setModal({
            title: 'Login expired',
            body: 'Please login again',
            type: 'error',
          });
          return Promise.reject(error);
        }
      }
    }

    return Promise.reject(error);
  }
);

export function setAuthHeaderToken(token: string) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default api;
