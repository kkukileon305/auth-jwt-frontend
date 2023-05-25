export type TokenResponse = {
  accessToken: string;
  refreshToken: string;
  userId: string;
};

export type User = {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  tags: Tag[];
  author: Author;
  likeUsers: Author[];
}

export interface Author {
  id: string;
  username: string;
}

export interface Tag {
  id: number;
  tagName: string;
  createdAt: string;
}
