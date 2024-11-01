import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <>{children}</>;
};

export default RootLayout;
