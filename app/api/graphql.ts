import { ApolloClient, InMemoryCache } from '@apollo/client';
import { get_api_host, get_api_port, get_api_protocol } from '@/envs';

const gqlClient = new ApolloClient({
  uri: `${get_api_protocol()}://${get_api_host()}:${get_api_port()}/graphql`,
  cache: new InMemoryCache()
});

export default gqlClient
