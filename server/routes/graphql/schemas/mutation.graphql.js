export default `
    type Mutation{
        createProductor (productor : newProductor) : Boolean
        createProductorReturned (productor : newProductor) : Productor
        createTipo (tipo : newTipo) : Boolean
        createTipoReturned (tipo : newTipo) : Tipo
        createSecado (secado : newSecado) : Boolean
        createSecadoReturned (secado : newSecado) : Secado
        createConductor (conductor : newConductor) : Boolean
        createConductorReturned (conductor : newConductor) : Conductor
        createLote ( lote : newLote ) : Boolean
        createLoteReturned (lote : newLote) : Lote
        createCliente ( cliente : newCliente ) : Boolean
        createClienteReturned (cliente : newCliente) : Cliente
    }
`

// createUsuario (usuario : newUsuario) : Boolean
//         createUsuarioReturned (usuario : newUsuario) : Usuario
// createLote ( lote : newLote ) : Boolean
//         createLoteReturned (lote : newLote) : Lote