import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changedWork} from '../../redux/actions/working';

import '../../styles/sidebar.css';

class Sidebar extends React.Component{
    
    constructor(props){
        super(props);
        this.cambiar = this.cambiar.bind(this);
    }
    
    cambiar(e){
        this.props.changedWork(e.target.value);
    }
    
    render(){
        return(
            <div className="sidebar">
                <button onClick={this.cambiar} value="tipoCafe" > Tipo Cafe </button>
                <button onClick={this.cambiar} value="tipoSecado" > Tipo Secado </button>
            </div>
        )
    }
}

Sidebar.propTypes = {
    changedWork : PropTypes.func.isRequired
}


export default connect(null, {changedWork})(Sidebar);