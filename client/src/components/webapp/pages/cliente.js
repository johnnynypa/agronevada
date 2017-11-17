import React from 'react';
import Modal from 'react-modal';

import {clientes, cliente} from '../../../graphql/cliente';
import ModalData from './modalNew/ModalCliente.js';
import ModalDataEdit from './modalEdit/ModalClienteEdit.js';

class Cliente extends React.Component{
    
    constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : "",
			modalIsOpen: false,
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
			cliente(e.target.id)
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
		Infos.push({id: dat.id, cedula: dat.cedula, nombre:dat.nombre, direccion: dat.direccion, email: dat.email, telefono: dat.telefono});
		this.setState({'Infos': Infos});
	}
	
	componentWillMount(){
		clientes()
		.then(dat => {
			this.setState({'Infos' : dat.data.clientes});
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
					<button id="add" onClick={this.openModal} className="button-add">Agregar Cliente</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nombre</th>
								<th>Cedula</th>
								<th>Direccion</th>
								<th>Telefono</th>
								<th>Email</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.nombre}</td>
									<td>{inf.cedula}</td>
									<td>{inf.direccion}</td>
									<td>{inf.telefono}</td>
									<td>{inf.email}</td>
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
							clienteEdit={this.state.typeEdit}
						/>
					</div>
				</Modal>
            </div>
        )
    }
}

export default Cliente;
