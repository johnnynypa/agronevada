export default `
    type Ajuste{
        id : Int!
        descripcion : String!
        fecha : String!
        cantidadKg : Float!
        lote : Lote!
    }
    
    input newAjuste{
        idLote: Int!
        descripcion : String!
        fecha : String!
        cantidadKg : Float!
    }
`