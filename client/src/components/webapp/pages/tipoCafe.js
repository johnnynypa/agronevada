import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import '../../../styles/navbar.css';

import {tipos, tipo} from '../../../graphql/tipo';
import ModalData from './ModalCafe';

class TipoCafe extends React.Component{
    
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
descripcion
                precioKg
                bonificacion
	updateTable(dat){
		let Infos = this.state.Infos;
		Infos.push({
			id: dat.id,
			descripcion: dat.descripcion,
		 	precioKg: dat.precioKg, 
		 	bonificacion: dat.bonificacion
		 });
		this.setState({'Infos': Infos});
	}
	
	componentWillMount(){
		tipos()
		.then(dat => {
			console.log(dat);
			console.log(dat.data.tipos);
			this.setState({'Infos' : dat.data.tipos});
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
					<button id="add" className="button-add" onClick={this.openModal} >Agregar Tipo Cafe</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Descripción</th>
								<th>Precio Kg</th>
								<th>Bonificacion</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.descripcion}</td>
									<td>{inf.precioKg}</td>
									<td>{inf.bonificacion}</td>
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

export default TipoCafe;
