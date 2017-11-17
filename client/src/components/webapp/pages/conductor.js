import React from 'react';
import Modal from 'react-modal';

import {conductores, conductor} from '../../../graphql/conductor';
import ModalData from './modalNew/ModalConductor';
import ModalDataEdit from './modalEdit/ModalConductorEdit';

class Conductor extends React.Component{
    
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
			conductor(e.target.id)
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
		Infos.push({id: dat.id, nombre:dat.nombre, telefono: dat.telefono});
		this.setState({'Infos': Infos});
	}
	
	componentWillMount(){
		conductores()
		.then(dat => {
			this.setState({'Infos' : dat.data.conductores});
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
					<button onClick={this.openModal} className="button-add">Agregar Conductor</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nombre</th>
								<th>Telefono</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.nombre}</td>
									<td>{inf.telefono}</td>
									<td><button id={inf.id} onClick={this.openModal} className="button-edit">Editar</button></td>
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
				<Modal
					isOpen={this.state.modalIsOpenEdit}
					onRequestClose={this.closeModal}>
					<div className="center-modal">
						<ModalDataEdit
							closeModal={this.closeModal}
							conductorEdit={this.state.typeEdit}
						/>
					</div>
				</Modal>
            </div>
        )
    }
}

export default Conductor;
