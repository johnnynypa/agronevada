import Schema from './schema.graphql';
import Query from './query.graphql';
import Mutation from './mutation.graphql';

// import Ajuste from './definitions/ajuste.graphql';
// import Cliente from './definitions/cliente.graphql';
// import Conductor from './definitions/conductor.graphql';
// import DetalleSalida from './definitions/detalleSalida.graphql';
// import Lote from './definitions/lote.graphql';
import Productor from './definitions/productor.graphql';
// import Salida from './definitions/salida.graphql';
// import Secado from './definitions/secado.graphql';
// import Tipo from './definitions/tipo.graphql';

const typeDefs = [
    Schema,
    Query,
    Mutation,
    // Ajuste,
    // Cliente,
    // Conductor,
    // DetalleSalida,
    // Lote,
    Productor,
    // Salida,
    // Secado,
    // Tipo
];

export default typeDefs;
