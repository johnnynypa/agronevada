import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/login';

import '../../styles/navbar.css';
import './'

class Navbar extends Component {
	render(){
		return(
			<div className="navbar" >
				<header className="navbar-header">
					<div className="navbar-header-banner" >
						<img src="/logo_peque.png" alt="Logo"/>
						<span className="navbar-logo">Agronevada</span>
					</div>
					<div className="navbar-header-buttons" >
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

