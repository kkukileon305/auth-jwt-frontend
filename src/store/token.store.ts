import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Token = {
  accessToken: string;
  refreshToken: string;
  userId: string;
};

type TokenStore = {
  token: Token;
  setToken: (token: Token) => void;
};

const useTokenStore = create<TokenStore>()(
  persist(
    (set) => ({
      token: {
        accessToken: '',
        refreshToken: '',
        userId: '',
      },
      setToken: (token: Token) => set(() => ({ token })),
    }),
    {
      name: 'token-storage',
    }
  )
);

export default useTokenStore;
