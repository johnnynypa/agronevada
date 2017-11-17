import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import {productores, productor} from '../../../graphql/productor';
import ModalData from './modalNew/ModalProductor';
import ModalDataEdit from './modalEdit/ModalProductorEdit';


class Productor extends React.Component{
    
    constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : "",
			typeEdit : {},
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
			productor(e.target.id)
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
									<td><button id={inf.id} onClick={this.openModal} className="button-edit">Editar</button></td>
								</tr>
							)}
						</tbody>
					</table>
				</div>	
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}>
					<div className="center-modal">
						<ModalData updateTable={this.updateTable}/>
					</div>
				</Modal>
				<Modal
					isOpen={this.state.modalIsOpenEdit}
					onRequestClose={this.closeModal}>
					<div className="center-modal">
						<ModalDataEdit
							closeModal={this.closeModal}
							productorEdit={this.state.typeEdit}
						/>
					</div>
				</Modal>
            </div>
        )
    }
}

export default Productor;
