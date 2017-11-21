import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

import { createSalida } from '../../../../graphql/salida';
import { clientes } from '../../../../graphql/cliente';



class ModalSalida extends Component {
	constructor(){
		super();
		this.state = {
			fecha : Date.now(),
			clienteList : [],
			clienteSelected : null,
			direccionDespacho : "",
		}
			
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleValChange = this.handleValChange.bind(this);
		this.onSelectFecha = this.onSelectFecha.bind(this);
		this.onSelectCliente = this.onSelectCliente.bind(this);
	}
	
	componentWillMount(){
		clientes()
		.then( dat => {
			const CLIENTES = dat.data.clientes;
			console.log(CLIENTES);
			let ClienteList = CLIENTES.map( (currentValue) => {
				return {label:currentValue.nombre, value: currentValue.id};
			})
			console.log(ClienteList);
			this.setState({clienteList : ClienteList});
		})
		.catch(err => {alert(err)})
	}
	
	static propTypes = {
		updateTable : PropTypes.func.isRequired
	}

	handleValChange(e){
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSaveClick(e){
		createSalida(this.state).then(res => {
			this.props.updateTable(res.data.createSalidaReturned);
		})
	}
	
	onSelectCliente(option){
		this.setState({clienteSelected: option});
	}

	onSelectFecha(date){
		console.log(date);
		this.setState({fecha: date});
	}
	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Salida</span>
				</div>
				
				<div className="cInput-modal">
					<label>Seleccione un Cliente </label>
					<Dropdown
						id="listTipo"
						options={this.state.clienteList}
						value={this.state.clienteSelected ? this.state.clienteSelected : null}
						onChange={this.onSelectCliente}
						placeholder = "Seleccione un Cliente"
					/>
				</div>
				
				
				<div className="cInput-modal">
					<label>Seleccione una Fecha </label>
					<InfiniteCalendar
					    width={450}
					    height={250}
					    selected={this.state.fecha}
					    maxDate={Date.now()}
					    onSelect={this.onSelectFecha}
					  />
				</div>
				
				<div className="cInput-modal">
					<label htmlFor="direccionDespacho" >Direccion de despacho </label>
					<input className="input-modify" type="text" placeholder=" Direccion de despacho:" id="direccionDespacho" value={this.state.direccionDespacho} name="direccionDespacho" onChange={this.handleValChange}/>
				</div>
				
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalSalida;
