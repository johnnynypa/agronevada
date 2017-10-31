'use strict';

import { merge } from 'lodash';

import productorResolver from './definitions/productor.resolver';
import tiposResolver from './definitions/tipo.resolver';
import secadoResolver from './definitions/secado.resolver';

const resolvers = merge(
    productorResolver,
    tiposResolver,
    secadoResolver
);

export default resolvers;
