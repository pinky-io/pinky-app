import { ApolloClient, InMemoryCache } from "@apollo/client"

const THE_GRAPH_ENDPOINT =
  "https://api.studio.thegraph.com/query/46763/test0/v0.0.3"

export const client = new ApolloClient({
  uri: THE_GRAPH_ENDPOINT,
  cache: new InMemoryCache(),
})
