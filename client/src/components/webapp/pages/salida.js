import React from 'react';
import Modal from 'react-modal';
import ModalData from './modalNew/ModalSalida';
//import ModalSalidaView from './modalView/ModalSalida';
import {salidasWithCliente} from '../../../graphql/salida';

class Salida extends React.Component{
    
    constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : "",
			typeEdit : {},
			typeView : {},
			modalIsOpenEdit : false,
			modalIsOpenView : false
		}
		this.openModal = this.openModal.bind(this);
		this.openModalView = this.openModalView.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.updateTable = this.updateTable.bind(this);
	}
	
	openModalView(e){
// 		console.log(e.target.id);
// 		salida(e.target.id)
// 		.then(dat => {
// 			this.setState({modalIsOpenView : true, typeView:dat})
// 		})
// 		.catch( err => {
// 			console.log(err);
// 			alert("Ha ocurrido un error, vuelva a intentarlo");
// 		});
	}
	
	openModal(e) {
		if(e.target.id === "add"){ 
			this.setState({modalIsOpen: true});
		}else{
			// salida(e.target.id)
			// .then(dat => {
			// 	this.setState({modalIsOpenEdit: true, typeEdit : dat})
			// })
			// .catch( err => { alert("Ha ocurrido un error, vuelva a intentarlo") });
		}
	}
	
	closeModal() {
		this.setState({
			modalIsOpen: false,
			modalIsOpenEdit: false,
			modalIsOpenView: false
		});
	}

	updateTable(dat){
		let Infos = this.state.Infos;
		Infos.push({
			id: dat.id,
			direccionDespacho: dat.direccionDespacho,
			fecha: dat.fecha,
			cliente: dat.cliente.nombre,
		});
		this.setState({'Infos': Infos});
	}

	componentWillMount(){
		salidasWithCliente()
		.then(dat => {
			this.setState({'Infos' : dat.data.salidas});
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
					<button id="add" className="button-add" onClick={this.openModal} >Agregar Salida</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Dir. despacho</th>
								<th>Fecha</th>
								<th>Cliente</th>
								<th>Opciones</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.direccionDespacho}</td>
									<td>{inf.fecha}</td>
									<td>{inf.cliente.nombre}</td>
									<td>
										<button id={inf.id} onClick={this.openModal} className="button-edit">Editar</button>
										<button id={inf.id} onClick={this.openModalView} className="button-edit">Ver</button>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					>
					<div className="center-modal">
						<ModalData updateTable={this.updateTable}/>
					</div>
				</Modal>
            </div>
        )
    }
}

export default Salida;
