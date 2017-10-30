import React from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import '../styles/login.css';

class Login extends React.Component{
    componentWillMount(){
        if(this.props.isLogin)
            this.context.router.history.push('/');
    }
    render(){
        return(
            <div className="login" >
                <div className="login-form" >
                    <h1>Iniciar Sesión</h1>
                </div>
            </div>
        )
    }
}

Login.contextTypes = {
    router : PropTypes.object.isRequired
}

function mapStateToProps(state){
    return{
        isLogin : state.login.isLogin
    }
}

export default connect(mapStateToProps)(Login);