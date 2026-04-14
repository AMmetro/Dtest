export type User = {
  id: string,
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  role: string,
};

export type AuthContextType = {
  user: User | null;
  login: (token: string, remember: boolean) => void;
  logout: () => void;
  loading: boolean;
};

export type LoginCredentials = {
  username: string;
  password: string;
};