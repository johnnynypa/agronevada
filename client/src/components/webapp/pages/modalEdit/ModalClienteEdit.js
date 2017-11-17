import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { updateDataCliente } from '../../../../graphql/cliente';

class ModalClienteEdit extends Component {
	
	constructor(props){
		super(props);
		const cliente = this.props.clienteEdit.data.cliente;
		this.state = { 
			origin :{
				id: cliente.id,
				nombre : cliente.nombre,
				cedula : cliente.cedula,
				direccion : cliente.direccion,
				email : cliente.email,
				telefono : cliente.telefono
			},
			id: cliente.id,
			nombre : cliente.nombre,
			cedula : cliente.cedula,
			direccion : cliente.direccion,
			email : cliente.email,
			telefono : cliente.telefono
		}
			
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleValChange = this.handleValChange.bind(this);
	}
	
	static propTypes = {
		closeModal : PropTypes.func.isRequired,
		clienteEdit : PropTypes.object.isRequired
	}

	handleValChange(e){
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSaveClick(e){
		const nuevo = {
			id : this.state.id,
			nombre : this.state.nombre,
			cedula : this.state.cedula,
			direccion : this.state.direccion,
			email : this.state.email,
			telefono : this.state.telefono
		}
		console.log(nuevo);
		updateDataCliente(this.state.origin, nuevo).then(() => {
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
					<span className="title-modal">Cliente</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Nombre:" id="idNombre" name="nombre" value={this.state.nombre} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Cedula:" id="idCedula" name="cedula" value={this.state.cedula} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Telefono:" id="idTelefono" name="telefono" value={this.state.telefono} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Direccion:" id="idDireccion" name="direccion" value={this.state.direccion} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Email:" id="idEmail" name="email" value={this.state.email} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalClienteEdit;