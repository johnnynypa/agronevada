'use strict';

import { merge } from 'lodash';

import productorResolver from './definitions/productor.resolver';
import tiposResolver from './definitions/tipo.resolver';
import secadoResolver from './definitions/secado.resolver';
import conductorResolver from './definitions/conductor.resolver';

const resolvers = merge(
    productorResolver,
    tiposResolver,
    secadoResolver,
    conductorResolver
);

export default resolvers;
