import { ClientProvider } from "./queryClientProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ClientProvider>{children}</ClientProvider>;
};
