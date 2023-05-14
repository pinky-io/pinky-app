import { ApolloClient, InMemoryCache } from "@apollo/client"

const THE_GRAPH_ENDPOINT =
  "https://api.studio.thegraph.com/query/46814/pinky-subgraph/v0.1.1"

export const client = new ApolloClient({
  uri: THE_GRAPH_ENDPOINT,
  cache: new InMemoryCache(),
})
