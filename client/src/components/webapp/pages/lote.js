import React from 'react';
import Modal from 'react-modal';
import ModalData from './modalNew/ModalLote';
import ModalLoteView from './modalView/ModalLote';
import  {lotes, lote} from '../../../graphql/lote';

class Lote extends React.Component{
    
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
		console.log(e.target.id);
		lote(e.target.id)
		.then(dat => {
			this.setState({modalIsOpenView : true, typeView:dat})
		})
		.catch( err => {
			console.log(err);
			alert("Ha ocurrido un error, vuelva a intentarlo");
		});
	}
	
	openModal(e) {
		if(e.target.id === "add"){ 
			this.setState({modalIsOpen: true});
		}else{
			lote(e.target.id)
			.then(dat => {
				// console.log("Los datos devueltos son: " + JSON.stringify(dat))
				this.setState({modalIsOpenEdit: true, typeEdit : dat})
			})
			.catch( err => { alert("Ha ocurrido un error, vuelva a intentarlo") });
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
								<th>Opciones</th>
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
					onRequestClose={this.closeModal}>
					<div className="center-modal">
						<ModalData updateTable={this.updateTable}/>
					</div>
				</Modal>
				<Modal
					isOpen={this.state.modalIsOpenView}
					onRequestClose={this.closeModal}
					>
					<ModalLoteView
						closeModal={this.closeModal}
						data={this.state.typeView}
					/>
				</Modal>
            </div>
        )
    }
}

export default Lote;
