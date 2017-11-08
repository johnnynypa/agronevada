import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import {productores, productor} from '../../../graphql/productor';
import ModalData from './ModalProductor';


class Productor extends React.Component{
    
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
		Infos.push({
			id: dat.id,
			nombreFinca:dat.nombreFinca,
			nombreGerente: dat.nombreGerente,
			telefono: dat.telefono,
			email : dat.email,
			direccion: dat.direccion
		});
		this.setState({'Infos': Infos});
	}

	componentWillMount(){
		productores()
		.then(dat => {
			this.setState({'Infos' : dat.data.productores});
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
					<button className="button-add" onClick={this.openModal} >Agregar Productor</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Finca</th>
								<th>Gerente</th>
								<th>Direccion</th>
								<th>Email</th>
								<th>Telefono</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.nombreFinca}</td>
									<td>{inf.nombreGerente}</td>
									<td>{inf.direccion}</td>
									<td>{inf.email}</td>
									<td>{inf.telefono}</td>
									<td><button className="button-edit">Editar</button></td>
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

export default Productor;
