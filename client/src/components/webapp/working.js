import React from 'react';
import {connect} from 'react-redux';
import TipoCafe from './pages/tipoCafe';
import TipoSecado from './pages/tipoSecado';
import Productor from './pages/productor';
import Conductor from './pages/conductor';

import '../../styles/working.css';

class Working extends React.Component{
    render(){
        if(this.props.isWorking == 'tipoCafe'){
            return(<div className="working" > <TipoCafe/></div>)
        }else if(this.props.isWorking == 'tipoSecado'){
            return(<div className="working" > <TipoSecado/></div>)
        }else if(this.props.isWorking == 'productores'){
            return(<div className="working" > <Productor/></div>)
        }else if(this.props.isWorking == 'conductores'){
            return(<div className="working" > <Conductor/></div>)
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
