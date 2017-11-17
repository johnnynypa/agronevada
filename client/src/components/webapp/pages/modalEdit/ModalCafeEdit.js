import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { updateDataTipo } from '../../../../graphql/tipo';

class ModalCafeEdit extends Component {
	constructor(props){
		super(props);
		const tipo = this.props.tipoEdit.data.tipo;
		this.state = { 
			origin :{
				id: tipo.id,
				descripcion : tipo.descripcion,
				precioKg : tipo.precioKg,
				bonificacion : tipo.bonificacion
			},
			id: tipo.id,
			descripcion : tipo.descripcion,
			precioKg : tipo.precioKg,
			bonificacion : tipo.bonificacion
		}
			
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleValChange = this.handleValChange.bind(this);
	}
	
	static propTypes = {
		closeModal : PropTypes.func.isRequired,
		tipoEdit : PropTypes.object.isRequired
	}

	handleValChange(e){
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSaveClick(e){
		const nuevo = {
			id : this.state.id,
			descripcion : this.state.descripcion,
			precioKg : this.state.precioKg,
			bonificacion : this.state.bonificacion
		}
		
		updateDataTipo(this.state.origin, nuevo).then(() => {
			this.props.closeModal()
		})
		.catch(err => {
			console.log(err)
		})
	}

	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Cafe</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Descripcion:" id="idDecripcion" name="descripcion" value={this.state.descripcion} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="PrecioKg:" id="idPrecioKg" name="precioKg" value={this.state.precioKg} onChange={this.handleValChange}/>
				</div>	
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Bonificacion:" id="idBonificacion" value={this.state.bonificacion} name="bonificacion" onChange={this.handleValChange}/>
				</div>	
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalCafeEdit;
