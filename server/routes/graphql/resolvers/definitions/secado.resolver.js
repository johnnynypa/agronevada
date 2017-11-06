'use strict';

import Secado from '../../../../model/definitions/secado';

export default {
    Query:{
        secado(root, {id}){
            return (id) ? Secado.getById(id)
                .then(dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        secados(){
            return  Secado.getAlls()
                .then(dat => dat)
                .catch( err => {throw new Error(err)});
        }
    },
    Mutation:{
        /**
         * @param sec : newSecado
         * @return {Boolean}
         **/
        createSecado(root,{ secado } ){
            console.log(secado);
            return (secado) ? Secado.newSecado(secado)
                .then( dat => true)
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        /**
         * @param sec : newSecado
         * @return {Secado}
         **/
        createSecadoReturned(root,{ secado }){
            return (secado) ? Secado.newSecado(secado)
                .then( dat => {
                    secado.id = dat;
                    return secado;
                })
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        secadoSetDescripcion(root, {idSecado, descripcion }){
            if(idSecado){
                return Secado.updateSetDescripcion(idSecado, descripcion )
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        }
    }
}