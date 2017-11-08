import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TipoCafe from './pages/tipoCafe';
import TipoSecado from './pages/tipoSecado';

import '../../styles/working.css';

class Working extends React.Component{
    render(){
        if(this.props.isWorking == 'tipoCafe'){
            return(<div className="working" > <TipoCafe/></div>)
        }else if(this.props.isWorking == 'tipoSecado'){
            return(<div className="working" > <TipoSecado/></div>)
        }else{
            return(<div className="working" ></div>)
        }
    }
}

function mapStateToProps(state){
    return {
        isWorking : state.working.isWorking
    }
}

export default connect(mapStateToProps)(Working);
