import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { createConductor } from '../../../graphql/conductor';

class ModalConductor extends Component {
	constructor(){
		super();
		this.state = { 
			id: '',
			nombre: '',
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
		createConductor(this.state).then(res => {
			this.props.updateTable(res.data.createConductorReturned);
			console.log(res);
		})
	}

	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Conductor</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Nombre:" id="idNombre" name="nombre" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Telefono:" id="idTelefono" name="telefono" onChange={this.handleValChange}/>
				</div>	
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalConductor;
