import { User } from "models/User";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "services/api";

type Credentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(data: Credentials): void;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type Response = {
  user: User;
  token: string;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authData, setAuthData] = useState({} as Response);
  const isAuthenticated = !!authData.user;

  useEffect(() => {}, []);

  const signIn = async ({ email, password }: Credentials) => {
    const response = await api.post<Response>("sessions", { email, password });
    const { user, token } = response.data;

    console.log({ user, token });
  };

  return (
    <AuthContext.Provider
      value={{ signIn, isAuthenticated, user: authData.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
