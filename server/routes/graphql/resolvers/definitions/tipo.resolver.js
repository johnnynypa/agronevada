'use strict';

import Tipo from '../../../../model/definitions/tipo';

export default {
    Query:{
        /**
         * @param id : Int
         **/
        tipo(root, {id}){
            return (id) ? Tipo.getById(id)
                .then(dat => dat)
                .catch(err => {throw new Error(err)})
            : null;
        },
        
        tipos(){
            return Tipo.getAlls()
            .then(dat => dat)
            .catch(err => {throw new Error(err)});
        }
    },
    Mutation:{
        /**
         * @param tipo : newTipo
         * @return {Boolean}
         **/
        createTipo(root, {tipo}){
            return (tipo) ? Tipo.newTipo(tipo)
                .then( dat => true)
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        /**
         * @param tipo : newTipo
         * @return {Tipo}
         **/
        createTipoReturned(root, {tipo}){
            return (tipo) ? Tipo.newTipo(tipo)
                .then( dat => {
                    tipo.id = dat;
                    return tipo;
                })
                .catch( err => {throw new Error(err)})
            : null;
        }
    }
}