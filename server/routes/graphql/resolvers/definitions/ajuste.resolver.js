'use strict';

import Ajuste from '../../../../model/definitions/ajuste';
import Lote from '../../../../model/definitions/lote';

export default {
    Query:{
        ajuste(root, {id}){
            return (id) ? Ajuste.getById(id)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        ajustes(){
            return Ajuste.getAlls()
            .then( dat => dat)
            .catch( err => {throw new Error(err)})
        },
        ajustesByLote(root, {idLote}){
            return (idLote) ? Ajuste.getById(idLote)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        }
    },
    Mutation:{
        createAjuste(root, {ajuste}){
            console.log(ajuste);
            if(ajuste){
                return validarSaldoLote(ajuste.idLote, ajuste.cantidadKg)
                .then( (saldoFinal) =>{
                    return Ajuste.newAjuste(ajuste)
                    .then(dat => {
                        //Actualizar saldo del lote
                        return Lote.actualizarSaldo(saldoFinal, ajuste.idLote)
                        .then(() => true)
                        .catch( err => {throw new Error(err)})
                    })
                    .catch( err => {throw new Error(err)})
                })
            }else{
                throw new Error("El saldo del lote es menor que la cantidad ajustada");
            }
        },
        
        createAjusteReturned(root, {ajuste}){
            if(ajuste){
                return validarSaldoLote(ajuste.idLote, ajuste.cantidadKg)
                .then( (saldoFinal) =>{
                    Ajuste.newAjuste(ajuste)
                    .then(dat => {
                        return Lote.actualizarSaldo(saldoFinal, ajuste.idLote)
                        .then(() => {
                            ajuste.id = dat;
                            return ajuste;
                        })
                        .catch( err => {throw new Error(err)})
                    })
                    .catch( err => {throw new Error(err)})
                })
            }else{
                throw new Error("El saldo del lote es menor que la cantidad ajustada");
            }
        }
    }
}

function validarSaldoLote(idLote, cantidad){
    return new Promise( (resolve, reject) => {
        try{
            Lote.getById(idLote)
            .then( dat =>{
                if(!dat && cantidad < 0){
                    cantidad = cantidad*(-1);
                    if(dat.saldo - cantidad < 0 ){
                        reject('El lote: '+idLote+' No posee la cantidad requerida');
                    }else{
                        resolve(dat.saldo-cantidad);
                    }
                }else{
                    resolve(dat.saldo + cantidad);
                }
            })
        }catch(err){
            reject("Ha ocurrido un error, intentelo mas tarde");
        }
    })
}