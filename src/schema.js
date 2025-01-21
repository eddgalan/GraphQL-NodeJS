import { createSchema } from 'graphql-yoga';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const typeDefinitions = loadSchemaSync('src/schemas/schema.graphql', {
    loaders: [new GraphQLFileLoader()],
});

const resolvers = {
    Query: {
        hello: () => 'Hello World!',
    },
};

export const schema = createSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions],
});
