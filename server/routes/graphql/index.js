import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import typeDefs from './schemas';
import resolvers from './resolvers';

const route = express.Router();
const endPoint = '/graphql';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

route.post('/', bodyParser.json(), graphqlExpress({
        schema
    })
)

route.get('/', graphiqlExpress({
    endpointURL: endPoint,
}));

export default route;
