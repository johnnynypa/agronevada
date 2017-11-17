import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { createProductor } from '../../../../graphql/productor';

class ModalProductor extends Component {
	constructor(){
		super();

		this.state = { 
			id: '',
			nombreGerente: '',
			nombreFinca: '',
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
		createProductor(this.state).then(res => {
			this.props.updateTable(res.data.createProductorReturned);
			console.log(res);
		})
	}

	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Productor</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Finca:" id="idFinca" name="nombreFinca" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Gerente:" id="idGerente" name="nombreGerente" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Direccion:" id="idDireccion" name="direccion" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Email:" id="idEmail" name="email" onChange={this.handleValChange}/>
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

export default ModalProductor;
