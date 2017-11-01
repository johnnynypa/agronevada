'use strict';

import Cliente from '../../../../model/definitions/cliente';

export default {
    Query:{
        cliente(root,{id}){
            return (id) ? Cliente.getById(id)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        clientes(){
            return Cliente.getAlls()
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
        },
        clienteByCedula(root,{cc}){
            return (cc) ? Cliente.getByCedula(cc)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        }
    },
    Mutation:{
        /**
         * @param cliente : newCliente
         * @return {Boolean}
         **/
        createCliente(root, {cliente}){
            return (cliente) ? Cliente.newCliente(cliente)
                .then( dat => true)
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        /**
         * @param cliente : newCliente
         * @return {Cliente}
         **/
        createClienteReturned(root, {cliente}){
            return (cliente) ? Cliente.newCliente(cliente)
                .then( dat => {
                    cliente.id = dat;
                    return cliente;
                })
                .catch( err => {throw new Error(err)})
            : null;
        },
    }
}