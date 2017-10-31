import { merge } from 'lodash';

import productorResolver from './definitions/productor.resolver';

const resolvers = merge(
    productorResolver
);

export default resolvers;
