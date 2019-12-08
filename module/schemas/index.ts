import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers';
import schema from './graphql/main.gql';

export default makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers
});