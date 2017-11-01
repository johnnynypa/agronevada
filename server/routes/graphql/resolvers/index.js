'use strict';

import { merge } from 'lodash';

import productorResolver from './definitions/productor.resolver';
import tiposResolver from './definitions/tipo.resolver';
import secadoResolver from './definitions/secado.resolver';
import conductorResolver from './definitions/conductor.resolver';
import loteResolver from './definitions/lote.resolver';
import clienteResolver from './definitions/cliente.resolver';
import salidaResolver from './definitions/salida.resolver';

const resolvers = merge(
    productorResolver,
    tiposResolver,
    secadoResolver,
    conductorResolver,
    loteResolver,
    clienteResolver,
    salidaResolver
);

export default resolvers;
