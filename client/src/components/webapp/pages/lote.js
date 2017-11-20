import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import ModalData from './modalNew/ModalLote';
import  {lotes, lote} from '../../../graphql/lote';

class Lote extends React.Component{
    
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
			// console.log(e.target.id);
			lote(e.target.id)
			.then(dat => {
				// console.log("Los datos devueltos son: " + JSON.stringify(dat))
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
			productor:dat.productor,
			secado: dat.secado,
			tipo: dat.tipo,
			saldo: dat.saldo
		});
		this.setState({'Infos': Infos});
	}

	componentWillMount(){
		lotes()
		.then(dat => {
			this.setState({'Infos' : dat.data.lotes});
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
					<button id="add" className="button-add" onClick={this.openModal} >Agregar Lote</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Tipo</th>
								<th>Secado</th>
								<th>Saldo</th>
								<th>Finca</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.tipo.descripcion}</td>
									<td>{inf.secado.descripcion}</td>
									<td>{inf.saldo}</td>
									<td>{inf.productor.nombreFinca}</td>
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
            </div>
        )
    }
}

export default Lote;
