import { ApolloServer } from 'apollo-server'
import { context } from './context'
import { schema } from './schema'

//instantiate our server with our graphql schema, now the server will know
//what API operations to support
export const server = new ApolloServer({ schema, context })