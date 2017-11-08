import React, {Component} from 'react';

class ModalData extends Component {
	render(){
		return(
			<div>
				<div className="cInput-modal">
					<span className="title-modal">Conductor</span>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Nombre: "/>
				</div>
				<div className="cInput-modal">
					<input className="input-modify" type="text" placeholder="Telefono: "/>
				</div>	
				<div className="cInput-modal">
					<button className="modal-save">Guardar</button>
				</div>
			</div>
		);
	}
}

export default ModalData;
