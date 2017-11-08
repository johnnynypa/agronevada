import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import '../../../styles/navbar.css';

import {secados, secado} from '../../../graphql/secado';
import ModalData from './ModalSecado';

class TipoSecado extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : ""
		}

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.updateTable = this.updateTable.bind(this);
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}
	
	afterOpenModal() {
		// references are now sync'd and can be accessed.
		// this.subtitle.style.color = '#f00';
	}
	
	closeModal() {
		this.setState({modalIsOpen: false});
	}

	updateTable(dat){
		let Infos = this.state.Infos;
		Infos.push({id: dat.id, descripcion: dat.descripcion });
		this.setState({'Infos': Infos});
	}
	
	componentWillMount(){
		secados()
		.then(dat => {
			console.log(dat);
			console.log(dat.data.secados);
			this.setState({'Infos' : dat.data.secados});
		})
		.catch( err => {
			this.setState({'error' : err});
		})
	}
    render(){
    	const {Infos} = this.state;
        return(
            <div className="Container-working">
				<div>
					<button id="add" className="button-add" onClick={this.openModal}>Agregar Tipo Secado</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th> Descripción </th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.descripcion}</td>
									<td><button id="edit" className="button-edit" onClick={this.handleModalClick}>Editar</button></td>
								</tr>
							)}
						</tbody>
					</table>
				</div>	
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}>
					<div className="center-modal">
						<ModalData updateTable={this.updateTable}/>
					</div>
				</Modal>
            </div>
        )
    }
}

export default TipoSecado;
