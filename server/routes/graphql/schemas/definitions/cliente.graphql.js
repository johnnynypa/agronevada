export default `
    type Cliente{
        id : Int!
        cedula : String!
        nombre : String!
        direccion : String!
        telefono : String!
        email : String!
    }
    
    input newCliente{
        cedula : String!
        nombre : String!
        direccion : String!
        telefono : String!
        email : String!
    }
`