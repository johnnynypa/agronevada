'use strict';

import Lote from '../../../../model/definitions/lote';
import Conductor from '../../../../model/definitions/conductor';
import Productor from '../../../../model/definitions/productor';
import Tipo from '../../../../model/definitions/tipo';
import Secado from '../../../../model/definitions/secado';

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
            return Productor.getById(lote.idProductor)
            .then( (dat) => {
                return {
                    id : dat.id,
                    nombreFinca : dat.nombreFinca,
                    nombreGerente : dat.nombreGerente,
                    direccion : dat.direccion,
                    telefono : dat.telefono,
                    email : dat.email
                }
            })
            .catch(err => {throw new Error(err)})
        },
        /**
         * @param lote : Lote
         * */
        conductor(lote){

            return Conductor.getById(lote.idConductor)
            .then( (dat) => {
                return {
                    id : dat.id,
                    nombre : dat.nombre,
                    telefono : dat.telefono
                }
            })
            .catch(err => {throw new Error(err)})
        },
        
        /**
         * @param lote : Lote
         * */
        secado(lote){
            return Secado.getById(lote.idSecado)
            .then( dat => {
                return {
                    id : dat.id,
                    descripcion : dat.descripcion
                }
            })
            .catch(err => {throw new Error(err)})
        },
        
        /**
         * @param lote : Lote
         * */
        tipo(lote){
            return Tipo.getById(lote.idTipo)
            .then( dat => {
                return {
                    id : dat.id,
                    descripcion : dat.descripcion,
                    precioKg : dat.precioKg,
                    bonificacion : dat.bonificacion
                }
            })
            .catch(err => {throw new Error(err)})
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
                    console.log(dat);
                    lote.id = dat;
                    return lote;
                })
                .catch( err => {throw new Error(err)})
            : null;
        }
    }
}