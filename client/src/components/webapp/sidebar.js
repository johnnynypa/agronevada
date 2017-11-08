import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changedWork} from '../../redux/actions/working';

import '../../styles/sidebar.css';
import items from './data/nav';

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
				{items && items.map((item, key) =>
					<button key={key} onClick={this.cambiar} value={item.url} className="button-sidebar"> {item.title}</button>
				)}
            </div>
        )
    }
}

Sidebar.propTypes = {
    changedWork : PropTypes.func.isRequired
}


export default connect(null, {changedWork})(Sidebar);
