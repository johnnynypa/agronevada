export default `
    type Mutation{
        createProductor (productor : newProductor) : Boolean
        createProductorReturned (productor : newProductor) : Productor
        createTipo (tipo : newTipo) : Boolean
        createTipoReturned (tipo : newTipo) : Tipo
    }
`

// createUsuario (usuario : newUsuario) : Boolean
//         createUsuarioReturned (usuario : newUsuario) : Usuario
// createLote ( lote : newLote ) : Boolean
//         createLoteReturned (lote : newLote) : Lote