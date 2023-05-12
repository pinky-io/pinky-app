import { BrowserRouter } from "react-router-dom";

type RouterWrapperProps = {
  children: React.ReactNode;
};

export const RouterWrapper = ({ children }: RouterWrapperProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
