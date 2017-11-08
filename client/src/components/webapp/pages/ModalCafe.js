import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { createTipo as createCafe } from '../../../graphql/tipo';

class ModalCafe extends Component {
	constructor(){
		super();
		this.state = { 
			id: '',
			descripcion: '',
			bonificacion: ''
		}
			
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleValChange = this.handleValChange.bind(this);
	}
	
	static propTypes = {
		updateTable : PropTypes.func.isRequired
	}

	handleValChange(e){
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSaveClick(e){
		console.log(this.state);
		createCafe(this.state).then(res => {
			this.props.updateTable(res.data.createTipoReturned);
			console.log(res);
		})
	}

	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Cafe</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Descripcion:" id="idDecripcion" name="descripcion" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="PrecioKg:" id="idPrecioKg" name="precioKg" onChange={this.handleValChange}/>
				</div>	
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Bonificacion:" id="idBonificacion" name="bonificacion" onChange={this.handleValChange}/>
				</div>	
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalCafe;
