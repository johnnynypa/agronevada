import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {productores, productor} from '../../../graphql/productor';

class Productor extends React.Component{
    
    constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : ""
		}
	}
	
	componentWillMount(){
		productores()
		.then(dat => {
			this.setState({'Infos' : dat.data.productores});
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
					<button className="button-add">Agregar Productor</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Finca</th>
								<th>Gerente</th>
								<th>Direccion</th>
								<th>Email</th>
								<th>Telefono</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.nombreFinca}</td>
									<td>{inf.nombreGerente}</td>
									<td>{inf.direccion}</td>
									<td>{inf.email}</td>
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

export default Productor;
