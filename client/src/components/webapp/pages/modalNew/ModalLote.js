import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

import { createLote } from '../../../../graphql/lote';
import { tipos } from '../../../../graphql/tipo';
import { secados } from '../../../../graphql/secado';
import { productores } from '../../../../graphql/productor';
import { conductores } from '../../../../graphql/conductor';


class ModalLote extends Component {
	constructor(){
		super();
		this.state = { 
			tiposList : [],
			tipoSelected : null,
			
			secadosList : [],
			secadoSelected : null,
			
			conductorList : [],
			conductorSelected : null,
			
			productorList : [],
			productorSelected : null,
			
			fecha : Date.now(),
			
			cantidadKg : 0,
			factorRendimiento : 0,
			humedad : 0,
			precioBase : 0,
			retefuente : 0,
			pruebaTaza : 0,
			bonificacion : 0,
			descuento: 0
		}
			
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleValChange = this.handleValChange.bind(this);
		this._onSelectTipo = this._onSelectTipo.bind(this);
		this._onSelectConductor  = this._onSelectConductor.bind(this);
		this._onSelectProductor  = this._onSelectProductor.bind(this);
		this._onSelectSecado  = this._onSelectSecado.bind(this);
		this.onSelectFecha =  this.onSelectFecha.bind(this);
	}
	
	componentWillMount(){
		tipos()
		.then( dat => {
			const TIPOS = dat.data.tipos;
			console.log(TIPOS);
			let tiposList = TIPOS.map( (currentValue) => {
				return {label:currentValue.descripcion, value: currentValue.id};
			})
			console.log(tiposList);
			this.setState({tiposList : tiposList});
		})
		.catch(err => {alert(err)})
		
		conductores()
		.then( dat => {
			const CONDUCTORES = dat.data.conductores;
			console.log(CONDUCTORES);
			let conductorList = CONDUCTORES.map( (currentValue) => {
				return {label:currentValue.nombre, value: currentValue.id};
			})
			console.log(conductorList);
			this.setState({conductorList : conductorList});
		})
		.catch(err => {alert(err)})
		
		secados()
		.then( dat => {
			const SECADOS = dat.data.secados;
			console.log(SECADOS);
			let secadosList  = SECADOS.map( (currentValue) => {
				return {label:currentValue.descripcion, value: currentValue.id};
			})
			console.log(secadosList );
			this.setState({secadosList  : secadosList });
		})
		.catch(err => {alert(err)})
		
		productores()
		.then( dat => {
			const PRODUCTORES = dat.data.productores;
			console.log(PRODUCTORES);
			let productorList  = PRODUCTORES.map( (currentValue) => {
				return {label:currentValue.nombreFinca, value: currentValue.id};
			})
			console.log(productorList );
			this.setState({productorList  : productorList });
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
		createLote(this.state).then(res => {
			this.props.updateTable(res.data.createLoteReturned);
		})
	}
	
	_onSelectTipo (option){
		console.log('You selected '+ option.label + ". Y su id es: " + option.value)
		this.setState({tipoSelected: option})
	}
	
	_onSelectSecado (option){
		console.log('You selected '+ option.label + ". Y su id es: " + option.value)
		this.setState({tipoSelected: option})
	}
	
	_onSelectProductor (option){
		console.log('You selected '+ option.label + ". Y su id es: " + option.value)
		this.setState({tipoSelected: option})
	}
	
	_onSelectConductor (option){
		console.log('You selected '+ option.label + ". Y su id es: " + option.value)
		this.setState({tipoSelected: option})
	}

	onSelectFecha(date){
		console.log(date);
		this.setState({fecha: date});
	}
	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Lote</span>
				</div>
				
				<div className="cInput-modal">
					<Dropdown
						options={this.state.tiposList}
						value={this.state.tipoSelected ? this.state.tipoSelected : null}
						onChange={this._onSelectTipo}
						placeholder = "Seleccione un tipo de cafe"
					/>
				</div>
				<div className="cInput-modal">
					<Dropdown
						options={this.state.secadosList}
						value={this.state.secadoSelected ? this.state.secadoSelected : null}
						onChange={this._onSelectSecado }
						placeholder = "Seleccione un tipo de secado"
					/>
				</div>
				<div className="cInput-modal">
					<Dropdown
						options={this.state.productorList}
						value={this.state.productorSelected ? this.state.productorSelected : null}
						onChange={this._onSelectProductor }
						placeholder = "Seleccione un Productor"
					/>
				</div>
				<div className="cInput-modal">
					<Dropdown
						options={this.state.conductorList}
						value={this.state.conductorSelected ? this.state.conductorSelected : null}
						onChange={this._onSelectConductor }
						placeholder = "Seleccione un Conductor"
					/>
				</div>
				
				<div className="cInput-modal">
					<InfiniteCalendar
					    width={450}
					    height={250}
					    selected={this.state.fecha}
					    maxDate={Date.now()}
					    onSelect={this.onSelectFecha}
					  />
				</div>
				
				<div className="cInput-modal">
					<label htmlFor="cantidadKg" > Cantidad </label>
					<input className="input-modify" type="text" placeholder="cantidad en Kg:" id="cantidadKg" value={this.state.cantidadKg} name="cantidadKg" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="factorRendimiento" > Factor de rendimiento </label>
					<input className="input-modify" type="text" placeholder="Factor de Rendimiento:" id="factorRendimiento" value={this.state.factorRendimiento} name="factorRendimiento" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="humedad" > Humedad </label>
					<input className="input-modify" type="text" placeholder="Humedad:" id="humedad" value={this.state.humedad} name="humedad" onChange={this.handleValChange}/>
				</div>
				<div className="cInput-modal">
					<label htmlFor="precioBase" > Precio Base </label>
					<input className="input-modify" type="text" placeholder="Precio Base:" id="precioBase" value={this.state.precioBase} name="precioBase" onChange={this.handleValChange}/>
				</div>
				
				<div className="cInput-modal">
					<button className="modal-save" onClick={this.handleSaveClick}>Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalLote;
