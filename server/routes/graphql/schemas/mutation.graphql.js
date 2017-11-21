export default `
    type Mutation{
        createProductor (productor : newProductor) : Boolean
        createProductorReturned (productor : newProductor) : Productor
        productorSetNombreFinca(idProductor : Int!, nombreFinca:String!) : Boolean
        productorSetNombreGerente(idProductor : Int!, nombreGerente:String!) : Boolean
        productorSetTelefono(idProductor : Int!, telefono:String!) : Boolean
        productorSetEmail(idProductor : Int!, email:String!) : Boolean
        productorSetDireccion(idProductor : Int!, direccion:String!) : Boolean
        
        createTipo (tipo : newTipo) : Boolean
        createTipoReturned (tipo : newTipo) : Tipo
        tipoSetDescripcion(idTipo : Int!, descripcion : String!) : Boolean
        tipoSetPrecioKg(idTipo : Int!, precioKg : Float!) : Boolean
        tipoSetBonificacion(idTipo : Int!, bonificacion : Float) : Boolean
        
        createSecado (secado : newSecado) : Boolean
        createSecadoReturned (secado : newSecado) : Secado
        secadoSetDescripcion (idSecado : Int!, descripcion : String!) : Boolean
        
        createConductor (conductor : newConductor) : Boolean
        createConductorReturned (conductor : newConductor) : Conductor
        conductorSetNombre (idConductor : Int!, nombre:String!) : Boolean
        conductorSetTelefono (idConductor : Int!, telefono:String) : Boolean
        
        createLote ( lote : newLote ) : Boolean
        createLoteReturned (lote : newLote) : Lote
        createCliente ( cliente : newCliente ) : Boolean
        createClienteReturned (cliente : newCliente) : Cliente
        
        createSalida ( salida : newSalida ) : Boolean
        createSalidaReturned ( salida : newSalida ) : Salida
        createAjuste (ajuste: newAjuste) : Boolean
        createAjusteReturned (ajuste: newAjuste) : Ajuste
    }
`

// createUsuario (usuario : newUsuario) : Boolean
//         createUsuarioReturned (usuario : newUsuario) : Usuario