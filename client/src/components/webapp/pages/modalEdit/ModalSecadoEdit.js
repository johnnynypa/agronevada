import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { updateDataSecado } from '../../../../graphql/secado';

class ModalSecadoEdit extends Component {
	constructor(props){
		super(props);
		const secado = this.props.secadoEdit.data.secado;
		this.state = { 
			origin :{
				id: secado.id,
				descripcion : secado.descripcion
			},
			id: secado.id,
			descripcion : secado.descripcion
		}
			
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleValChange = this.handleValChange.bind(this);
	}
	
	static propTypes = {
		closeModal : PropTypes.func.isRequired,
		secadoEdit : PropTypes.object.isRequired
	}

	handleValChange(e){
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSaveClick(e){
		const nuevo = {
			id : this.state.id,
			descripcion : this.state.descripcion
		}
		
		updateDataSecado(this.state.origin, nuevo).then(() => {
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
					<span className="title-modal">Tipo de secado</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Descripcion:" id="idDecripcion" name="descripcion" value={this.state.descripcion} onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalSecadoEdit;