'use strict';

import { merge } from 'lodash';

import productorResolver from './definitions/productor.resolver';
import tiposResolver from './definitions/tipo.resolver';
import secadoResolver from './definitions/secado.resolver';
import conductorResolver from './definitions/conductor.resolver';
import loteResolver from './definitions/lote.resolver';

const resolvers = merge(
    productorResolver,
    tiposResolver,
    secadoResolver,
    conductorResolver,
    loteResolver
);

export default resolvers;
