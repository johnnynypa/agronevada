import { merge } from 'lodash';

import productorResolver from './definitios/productor.resolver';

const resolvers = merge(
    productorResolver
);

export default resolvers;
