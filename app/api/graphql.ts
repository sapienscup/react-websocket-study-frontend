import { ApolloClient, InMemoryCache } from '@apollo/client'
import { get_api_host, get_api_port, get_api_protocol, get_app_env } from '@/envs'

import { split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
// import { WebSocketLink } from '@apollo/client/link/ws'

const uri = {
  http: `${get_api_protocol()}://${get_api_host()}:${get_api_port()}/graphql`,
  ws: `ws://${get_api_host()}:${get_api_port()}/graphql`
}

const httpLink = new HttpLink({
  uri: uri.http
})

let splitLink

// const wsLink = new WebSocketLink({
//   uri: uri.ws,
//   options: {
//     reconnect: true
//   }
// })

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
if (get_app_env() === 'production') {
  splitLink = split(({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  }, httpLink)
} else {
  const wsLink = new GraphQLWsLink(
    createClient({
      url: uri.ws
    })
  )

  splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    httpLink,
    wsLink
  )
}

const gqlClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

export default gqlClient
