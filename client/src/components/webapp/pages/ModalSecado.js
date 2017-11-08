import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { createSecado } from '../../../graphql/secado';


class ModalSecado extends Component {
	constructor(){
		super();
		this.state = { 
			id: '',
			descripcion: ''	
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
		createSecado(this.state).then(res => {
			this.props.updateTable(res.data.createSecadoReturned);
			console.log(res);
		})
	}

	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Secado</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="descripcion:" id="idDescripcion" name="descripcion" onChange={this.handleValChange}/>
				</div>	
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalSecado;
