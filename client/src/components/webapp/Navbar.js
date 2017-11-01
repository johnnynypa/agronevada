import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/login';

import '../../styles/index.css';

class Navbar extends Component {
	render(){
		const nombre = 'Angel';
		return(
			<div>
				<header className="navbar-header">
					<div>
						<span className="navbar-logo">Agronevada</span>
					</div>
					<div>
						<span>{nombre}</span>
						<button className="cerrar-sesion" onClick={this.props.logout}>cerrar sesión</button>
					</div>
				</header>
			</div>	
		);
	}
}

Navbar.proptypes = {
	logout : PropTypes.func.isRequired
}

export default connect(null, {logout})( Navbar);

