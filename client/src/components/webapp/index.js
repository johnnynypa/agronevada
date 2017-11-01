import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Navbar from './Navbar';

class WebApp extends React.Component{
    render(){
        if(!this.props.isLogin){
            this.context.router.history.push('/login');
            return (<div></div>);
        }else{
            return(
                <div>
					<Navbar/>
                </div>
            )
        }
    }
}

WebApp.contextTypes = {
    router : PropTypes.object.isRequired
}

function mapStateToProps(state){
    return{
        isLogin : state.login.isLogin
    }
}

export default connect(mapStateToProps)(WebApp);
