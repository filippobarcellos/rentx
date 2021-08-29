import { AuthProvider } from "./Auth";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { AppProvider };
