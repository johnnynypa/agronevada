import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { createCliente } from '../../../../graphql/cliente';

class ModalCliente extends Component {
	constructor(){
		super();

		this.state = { 
			id: '',
			nombre: '',
			cedula: '',
			direccion: '',
			email: '',
			telefono: ''
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
		createCliente(this.state).then(res => {
			this.props.updateTable(res.data.createClienteReturned);
			console.log(res);
		})
	}

	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Cliente</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Nombre:" id="idNombre" value={this.state.nombre} name="nombre" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Cedula:" id="idCedula" value={this.state.cedula} name="cedula" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Direccion:" id="idDireccion" value={this.state.direccion} name="direccion" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Email:" id="idEmail" name="email" value={this.state.email} onChange={this.handleValChange}/>
				</div>	
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Telefono:" id="idTelefono" value={this.state.telefono} name="telefono" onChange={this.handleValChange}/>
				</div>	
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalCliente;
