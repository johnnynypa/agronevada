export default `
    type Mutation{
        createLote ( lote : newLote ) : Boolean
        createLoteReturned (lote : newLote) : Lote
        createProductor (productor : newProductor) : Boolean
        createProductorReturned (productor : newProductor) : Producto
        createTipo (tipo : newTipo) : Boolean
        createTipoReturned (tipo : newTipo) : Tipo
    }
`

// createUsuario (usuario : newUsuario) : Boolean
//         createUsuarioReturned (usuario : newUsuario) : Usuario