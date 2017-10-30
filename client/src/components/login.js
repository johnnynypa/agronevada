import React from 'react';
import PropTypes from 'proptypes';

class Login extends React.Component{
    render(){
        return(
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}

Login.contextTypes = {
    router : PropTypes.func.isRequired
}

export default Login;