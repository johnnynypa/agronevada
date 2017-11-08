import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {conductores, conductor} from '../../../graphql/conductor';

class Conductor extends React.Component{
    
    constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : ""
		}
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
					<button className="button-add">Agregar Conductor</button>
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
									<td><button className="button-edit">Editar</button></td>
								</tr>
							)}
						</tbody>
					</table>
				</div>	
            </div>
        )
    }
}

export default Conductor;
