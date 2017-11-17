import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { updateDataConductor } from '../../../../graphql/conductor';

class ModalConductorEdit extends Component {
	constructor(props){
		super(props);
		const conductor = this.props.conductorEdit.data.conductor;
		this.state = { 
			origin :{
				id: conductor.id,
				nombre : conductor.nombre,
				telefono : conductor.telefono
			},
			id: conductor.id,
			nombre : conductor.nombre,
			telefono : conductor.telefono
		}
			
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleValChange = this.handleValChange.bind(this);
	}
	
	static propTypes = {
		closeModal : PropTypes.func.isRequired,
		conductorEdit : PropTypes.object.isRequired
	}

	handleValChange(e){
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSaveClick(e){
		const nuevo = {
			id : this.state.id,
			nombre : this.state.nombre,
			telefono : this.state.telefono
		}
		console.log(nuevo);
		updateDataConductor(this.state.origin, nuevo).then(() => {
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
					<span className="title-modal">Conductor</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Nombre:" id="idNombre" name="nombre" value={this.state.nombre} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Telefono:" id="idTelefono" name="telefono" value={this.state.telefono} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalConductorEdit;