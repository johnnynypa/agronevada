import { merge } from 'lodash';

import productorResolver from './definitions/productor.resolver';
import tiposResolver from './definitions/tipo.resolver';

const resolvers = merge(
    productorResolver,
    tiposResolver
);

export default resolvers;
