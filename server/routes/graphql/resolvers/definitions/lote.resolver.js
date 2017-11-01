'use strict';

import Lote from '../../../../model/definitions/lote';

export default {
    Query:{
        lote(root, {id}){
            return (id) ? Lote.getById(id)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        lotes(){
            return Lote.getAlls()
                .then( dat => dat)
                .catch( err => {throw new Error(err)});
        },
        lotesBySecado(root, {idSecado}){
            return (idSecado) ? Lote.getBySecado(idSecado)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        lotesByTipo(root, {idTipo}){
            return (idTipo) ? Lote.getByTipo(idTipo)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        lotesByTipoAndSecado(root, {idTipo, idSecado}){
            return (idTipo && idSecado) ? Lote.getAllsByTipoAndSecado(idTipo, idSecado)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        lotesOrderOld(){
            
        },
        lotesOrderOldBySecado(root, {idSecado}){
            
        },
        lotesOrderOldByTipo(root, {idTipo}){
            
        },
        lotesOrderOldByTipoAndSecado(id, {idTipo, idSecado}){
            
        }
    },
    Lote:{
        /**
         * @param lote : Lote
         * */
        productor(lote){
            return {
                id : lote.idProductor,
                nombreFinca : lote.nombreFincaProductor,
                nombreGerente : lote.nombreGerenteProductor,
                direccion : lote.direccionProductor,
                telefono : lote.telefonoProductor,
                email : lote.emailProductor
            }
        },
        /**
         * @param lote : Lote
         * */
        conductor(lote){
            return {
                id : lote.idConductor,
                nombre : lote.nombreConductor,
                telefono : lote.telefonoConductor
            }
        },
        
        /**
         * @param lote : Lote
         * */
        secado(lote){
            return {
                id : lote.idSecado,
                descripcion : lote.descripcionTipoSecado
            }
        },
        
        /**
         * @param lote : Lote
         * */
        tipo(lote){
            return {
                id : lote.idTipo,
                descripcion : lote.descripcionTipoCafe,
                precioKg : lote.precioKgTipoCafe,
                bonificacion : lote.bonificacionTipoCafe
            }
        },
    },
    Mutation:{
        /**
         * @param lote : newLote
         * @return {Boolean}
         **/
        createLote(root, {lote}){
            return (lote) ? Lote.newLote(lote)
                .then( dat => true)
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        /**
         * @param lote : newLote
         * @return {Lote}
         **/
        createLoteReturned(root, {lote}){
            return (lote) ? Lote.newLote(lote)
                .then( dat => {
                    lote.id = dat;
                    return lote;
                })
                .catch( err => {throw new Error(err)})
            : null;
        }
    }
}