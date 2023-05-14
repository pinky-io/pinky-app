import { CenterProvider } from "@center-inc/react";

type CenterWrapperProps = {
  children: React.ReactNode;
};

export const CenterWrapper = ({ children }: CenterWrapperProps) => {
  return <CenterProvider apiKey="key617a902b2ffb61ee599b2b52">{children}</CenterProvider>;
};
