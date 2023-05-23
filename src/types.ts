export type TokenResponse = {
  accessToken: string;
  refreshToken: string;
  userId: string;
};

export type User = {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
};
