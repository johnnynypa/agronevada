import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/login';

import '../../styles/navbar.css';

class Navbar extends Component {
	render(){
		return(
			<div className="navbar" >
				<header className="navbar-header">
					<div>
						<span className="navbar-logo">Agronevada</span>
					</div>
					<div>
						<span>{this.props.user.nombre}</span>
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

function mapStateToProps(state){
	return{
		user : state.login.user
	}
}

export default connect(mapStateToProps, {logout})( Navbar);

