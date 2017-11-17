import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { updateDataProductor } from '../../../../graphql/productor';

class ModalProductorEdit extends Component {
	
	constructor(props){
		super(props);
		const productor = this.props.productorEdit.data.productor;
		this.state = { 
			origin :{
				id: productor.id,
				nombreFinca : productor.nombreFinca,
				nombreGerente : productor.nombreGerente,
				direccion : productor.direccion,
				email : productor.email,
				telefono : productor.telefono
			},
			id: productor.id,
			nombreFinca : productor.nombreFinca,
			nombreGerente : productor.nombreGerente,
			direccion : productor.direccion,
			email : productor.email,
			telefono : productor.telefono
		}
			
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleValChange = this.handleValChange.bind(this);
	}
	
	static propTypes = {
		closeModal : PropTypes.func.isRequired,
		productorEdit : PropTypes.object.isRequired
	}

	handleValChange(e){
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSaveClick(e){
		const nuevo = {
			id : this.state.id,
			nombreFinca : this.state.nombreFinca,
			nombreGerente : this.state.nombreGerente,
			direccion : this.state.direccion,
			email : this.state.email,
			telefono : this.state.telefono
		}
		console.log(nuevo);
		updateDataProductor(this.state.origin, nuevo).then(() => {
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
					<span className="title-modal">Productor</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Nombre de Finca:" id="idNombreFinca" name="nombreFinca" value={this.state.nombreFinca} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Nombre de Gerente:" id="idNombreGerente" name="nombreGerente" value={this.state.nombreGerente} onChange={this.handleValChange}/>
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

export default ModalProductorEdit;