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
        },
        
        tipoSetDescripcion(root, {idTipo, descripcion}){
            if(idTipo){
                return Tipo.updateSetDescripcion(idTipo, descripcion)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
        tipoSetPrecioKg(root, {idTipo, precioKg}){
            if(idTipo){
                return Tipo.updateSetPrecioKg(idTipo, precioKg)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
        tipoSetBonificacion(root, {idTipo, bonificacion}){
            if(idTipo){
                return Tipo.updateSetBonificacion(idTipo, bonificacion)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
    }
}