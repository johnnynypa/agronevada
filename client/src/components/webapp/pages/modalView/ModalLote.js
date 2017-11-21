import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalLoteView extends Component {
	constructor(props){
		super(props);
		console.log( JSON.stringify(this.props.data.data) );
		const {lote} = this.props.data.data;
		this.state = { 
			tipo : lote.tipo.descripcion,
			secado : lote.tipo.descripcion,
			conductor : lote.conductor.nombre,
			productor : lote.productor.nombreFinca,
			fecha : lote.fecha,
			cantidadKg : lote.cantidadKg,
			factorRendimiento : lote.factorRendimiento,
			humedad : lote.humedad,
			pruebaTaza : lote.pruebaTaza,
			precioBase : lote.precioBase,
			retefuente : lote.retefuente,
			bonificacion : lote.bonificacion,
			descuento: lote.descuento
		}
	}
	
	static propTypes(){
		return {
			data : PropTypes.object.isRequired,
			closeModal : PropTypes.func.isRequired
		}
	}

	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Lote</span>
				</div>
				
				<div className="cInput-modal">
					<label htmlFor="tipo" >Tipo de café</label>
					<input className="input-modify" type="text" placeholder="Tipo de café:" id="tipo" value={this.state.tipo} name="tipo"/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="secado" >Secado</label>
					<input className="input-modify" type="text" placeholder="Secado:" id="secado" value={this.state.secado} name="secado"/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="productor" >Productor</label>
					<input className="input-modify" type="text" placeholder="Productor:" id="productor" value={this.state.productor} name="productor"/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="conductor" >Conductor</label>
					<input className="input-modify" type="text" placeholder="Conductor:" id="conductor" value={this.state.conductor} name="conductor"/>
				</div>
				
				<div className="cInput-modal">
					<label htmlFor="fecha" > Fecha </label>
					<input className="input-modify" type="text" placeholder="Fecha:" id="fecha" value={this.state.fecha} name="fecha"/>
				</div>
				
				<div className="cInput-modal">
					<label htmlFor="cantidadKg" > Cantidad </label>
					<input className="input-modify" type="number" placeholder="cantidad en Kg:" id="cantidadKg" value={this.state.cantidadKg} name="cantidadKg" />
				</div>
				<div className="cInput-modal">
					<label htmlFor="factorRendimiento" > Factor de rendimiento </label>
					<input className="input-modify" type="number" placeholder="Factor de Rendimiento:" id="factorRendimiento" value={this.state.factorRendimiento} name="factorRendimiento" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="humedad" > Humedad </label>
					<input className="input-modify" type="number" placeholder="Humedad:" id="humedad" value={this.state.humedad} name="humedad" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="pruebaTaza" > Prueba Taza </label>
					<input className="input-modify" type="number" placeholder="Prueba Taza:" id="pruebaTaza" value={this.state.pruebaTaza} name="pruebaTaza" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="precioBase" > Precio Base </label>
					<input className="input-modify" type="number" placeholder="Precio Base:" id="precioBase" value={this.state.precioBase} name="precioBase" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="retefuente" > Retefuente </label>
					<input className="input-modify" type="number" placeholder="Retefuente:" id="retefuente" value={this.state.retefuente} name="retefuente" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="retefuente" > Bonificacion </label>
					<input className="input-modify" type="number" placeholder="Bonificacion:" id="bonificacion" value={this.state.bonificacion} name="bonificacion" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="descuento" > Descuento </label>
					<input className="input-modify" type="number" placeholder="Descuento:" id="descuento" value={this.state.descuento} name="descuento" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.props.closeModal}>Cerrar</button>
				</div>
			</div>
		);
	}
}

export default ModalLoteView;