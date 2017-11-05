'use strict';

export default `
    type Query {
        productor                       (id : Int)                                      : Productor
        productores                                                                     : [Productor]
        tipo                            (id : Int)                                      : Tipo
        tipos                                                                           : [Tipo]
        secado                          (id : Int)                                      : Secado
        secados                                                                         : [Secado]
        conductor                       (id : Int)                                      : Conductor
        conductores                                                                     : [Conductor]
        lote                            (id : Int)                                      : Lote
        lotes                                                                           : [Lote]
        lotesBySecado                   (idSecado : Int)                                : [Lote]
        lotesByTipo                     (idTipo : Int)                                  : [Lote]
        lotesByTipoAndSecado            (idTipo : Int, idSecado: Int)                   : [Lote]
        lotesOrderOld                                                                   : [Lote]
        lotesOrderOldBySecado           (idSecado : Int)                                : [Lote]
        lotesOrderOldByTipo             (idTipo : Int)                                  : [Lote]
        lotesOrderOldByTipoAndSecado    (idTipo : Int, idSecado : Int)                  : [Lote]
        cliente                         (id : Int)                                      : Cliente
        clientes                                                                        : [Cliente]
        clienteByCedula                 (cc : String)                                   : Cliente
        ajuste                          (id : Int)                                      : Ajuste
        ajustes                                                                         : [Ajuste]
        ajustesByLote                   (idLote : Int)                                  : [Ajuste]
    }
`;

// usuario                         (id : Int)                                      : Usuario}
//         usuarios                                                                        : [Usuario]
//         usuariosByRole                  (idRole : Int)                                  : [Usuario]
// role                            (id : Int)                                      : Role
//         roles                                                                           : [Role]
//         salida                          (id: Int)                                       : Salida
//         salidas                                                                         : [Salida]
//         salidasByLote                   (idLote : Int)                                  : [Salida]
//         salidasByFecha                  (fecha : String)                                : [Salida]
//         salidasByLoteAndFecha           (idLote : Int, fecha : String)                  : [Salida]
//         salidasByCliente                (idCliente : Int)                               : [Salida]
//         salidasByClienteAndFechaAndLote (idCliente : Int, fecha : String, idLote: Int)  : [Salida]
//         salidasByClienteAndLote         (idCliente : Int, idLote : Int)                 : [Salidas]
