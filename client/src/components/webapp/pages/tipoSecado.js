import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import '../../../styles/navbar.css';
import Infos from '../data/info';

class TipoSecado extends React.Component{
    render(){
        return(
            <div className="Container-working">
				<div>
					<button className="button-add">Agregar Tipo Secado</button>
				</div>
				<div className="container-table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Descripción</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							{  Infos && Infos.map((inf, key) =>
								<tr key={key}>
									<td>{inf.id}</td>
									<td>{inf.descripcion}</td>
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

export default TipoSecado;
