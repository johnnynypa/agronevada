import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {tipos, tipo} from '../../../graphql/tipo';

class TipoCafe extends React.Component{
    
    constructor(props){
		super(props);
		this.state = {
			Infos : [],
			error : ""
		}
	}
	
	componentWillMount(){
		tipos()
		.then(dat => {
			console.log(dat);
			console.log(dat.data.tipos);
			this.setState({'Infos' : dat.data.tipos});
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
					<button className="button-add">Agregar Tipo Cafe</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Descripción</th>
								<th>Precio Kg</th>
								<th>Bonificacion</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.descripcion}</td>
									<td>{inf.precioKg}</td>
									<td>{inf.bonificacion}</td>
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

export default TipoCafe;
