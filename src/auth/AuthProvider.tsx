import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { TOKEN_KEY } from "../Constant/constant";
import { getMe } from "../api/auth";
import { AuthContextType, User } from "./AuthTypes";
import { getToken, removeToken, setToken } from "./helper";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async (token: string) => {
    setLoading(true);
    try {
      const authUser = await getMe(token);
      const user = {
        id: authUser.id,
        username: authUser.username,
        firstName: authUser.firstName,
        lastName: authUser.lastName,
        email: authUser.email,
        image: authUser.image,
        role: authUser.role,
      }
      setUser(user);
    } catch (e) {
      localStorage.removeItem(TOKEN_KEY);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      const token = getToken()
    if (!token) {
      setLoading(false);
      return;
    }
    getUser(token);
  }, []);

  const login = async (token: string, remember: boolean) => {
    setToken(token, remember);
    getUser(token);
  };

  const logout = () => {
    removeToken(TOKEN_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};