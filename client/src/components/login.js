import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest } from '../redux/actions/login';
import '../styles/login.css';

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password: "",
            isLoading: false,
            errors: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentWillMount(){
        if(this.props.isLogin)
            this.context.router.history.push('/');
    }
    
    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e){
        e.preventDefault();
        const {username, password } = this.state;
        if(username && password){
            this.setState({isLoading:true, errors: {} });
			this.props.loginRequest(this.state)
			.then(
				(res) => {
					this.setState({isLoading: false});
					if(res.data.error){
						this.setState({errors: res.data.error});
						
					}else{
						this.context.router.history.push('/');
					}	
				}
			);
        }
    }
    
    render(){
        return(
            <div className="login" >
                <div className="login-form" >
					<form onSubmit={this.onSubmit}>
						<div className="container-title">
							<p className="login-title">Iniciar Sesión</p>
						</div>	
						<div className="container-input">
                        	<label htmlFor="username" > Usuario </label>
							<input type="text" 
								name="username" 
								id="username" 
								value={this.state.username} 
								onChange={this.onChange}/>
						</div>	
						<div className="container-input">	
							<label htmlFor="password" > Contraseña </label>
							<input type="password" 
								name="password" 
								id="password" 
								value={this.state.password} 
								onChange={this.onChange}/>
						</div>
						<div className={(this.state.errors) ? "container-input container-input-faild": "container-input"}  >
							<button className="button-sesion" 
								disabled={this.state.isLoading} 
							>Iniciar sesión</button>
						</div>
						<div className="container-sErrors">
							<span className="sesion-errors">{( this.state.errors === "" ) ? "": this.state.errors.toString() }</span>
						</div>
					</form>
                </div>
            </div>
        )
    }
}

Login.contextTypes = {
    router : PropTypes.object.isRequired
}

Login.propsTypes ={
    loginRequest: PropTypes.func.isRequerid
}

function mapStateToProps(state){
    return{
        isLogin : state.login.isLogin
    }
}

export default connect(mapStateToProps, {loginRequest})(Login);
