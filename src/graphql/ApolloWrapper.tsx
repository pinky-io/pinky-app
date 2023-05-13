import { client } from "./client";
import { ApolloProvider } from "@apollo/client";

type ApolloWrapperProps = {
  children: React.ReactNode;
};

export const ApolloWrapper = ({ children }: ApolloWrapperProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
