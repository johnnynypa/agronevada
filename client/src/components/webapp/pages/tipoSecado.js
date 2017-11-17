import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import '../../../styles/navbar.css';

import {secados, secado} from '../../../graphql/secado';
import ModalData from './modalNew/ModalSecado';
import ModalDataEdit from './modalEdit/ModalSecadoEdit';

class TipoSecado extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : "",
			modalIsOpenEdit : false,
			secadoEdit : {}
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
			secado(e.target.id)
			.then(dat => {
				this.setState({modalIsOpenEdit: true, secadoEdit : dat})
			})
			.catch( err => { alert("Ha ocurrido un error, vuelva a intentarlo") });
			
		}
	}
	
	closeModal() {
		this.setState({modalIsOpen: false, modalIsOpenEdit: false});
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
									<td><button id={inf.id} className="button-edit" onClick={this.openModal}>Editar</button></td>
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
							secadoEdit={this.state.secadoEdit}
						/>
					</div>
				</Modal>
            </div>
        )
    }
}

export default TipoSecado;
