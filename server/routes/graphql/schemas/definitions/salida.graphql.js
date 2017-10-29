export default `
    type Salida{
        id : Int!
        direccionDespacho : String!
        fecha : String!
        cliente : Cliente!
        detalles : [DetalleSalida]!
    }
    
    input newSalida{
        direccionDespacho : String!
        fecha : String!
        cliente : Cliente!
    }
`