import { createContext } from 'react';

type AuthContextType = {
  isAuth: boolean;
  user: any;
  setUser: (user: any) => void;
} | null;

export const AuthContext = createContext<AuthContextType>(null);
