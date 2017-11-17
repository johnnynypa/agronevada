import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import '../../../styles/navbar.css';

import {tipos, tipo} from '../../../graphql/tipo';
import ModalData from './modalNew/ModalCafe';
import ModalDataEdit from './modalEdit/ModalCafeEdit';

class TipoCafe extends React.Component{
    
    constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : "",
			typeEdit : {},
			modalIsOpen : false,
			modalIsOpenEdit : false
		}

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.updateTable = this.updateTable.bind(this);
		
	}
	
	openModal(e) {
		if(e.target.id === "add"){ 
			this.setState({modalIsOpen: true});
		}else{
			console.log(e.target.id);
			tipo(e.target.id)
			.then(dat => {
				console.log("Los datos devueltos son: " + JSON.stringify(dat))
				this.setState({modalIsOpenEdit: true, typeEdit : dat})
			})
			.catch( err => { alert("Ha ocurrido un error, vuelva a intentarlo") });
			
		}
	}
	
	closeModal() {
		this.setState({modalIsOpen: false, modalIsOpenEdit: false});
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
	
	updateTableEdit(){
		this.setState({typeEdit : {}});
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
								<tr key={key} >
									<td>{inf.id}</td>
									<td>{inf.descripcion}</td>
									<td>{inf.precioKg}</td>
									<td>{inf.bonificacion}</td>
									<td><button className="button-edit" id={inf.id} onClick={this.openModal}>Editar</button></td>
								</tr>
							)}
						</tbody>
					</table>
				</div>	
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}>
					<div className="center-modal">
						<ModalData updateTable={this.updateTable} />
					</div>
				</Modal>
				<Modal
					isOpen={this.state.modalIsOpenEdit}
					onRequestClose={this.closeModal}>
					<div className="center-modal">
						<ModalDataEdit
							closeModal={this.closeModal}
							tipoEdit={this.state.typeEdit}
						/>
					</div>
				</Modal>
            </div>
        )
    }
}

export default TipoCafe;
