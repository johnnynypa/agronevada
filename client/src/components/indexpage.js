import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class IndexPage extends React.Component{
    componentWillMount(){
        if(this.props.isLogin)
            this.context.router.history.push('/app');
        else
            this.context.router.history.push('/login');
    }
    render(){
        return(
            <div></div>
        )
    }
}

IndexPage.contextTypes = {
    router : PropTypes.object.isRequired
}
 
function mapStateToProps(state){
    return{
        isLogin : state.login.isLogin
    }
}
export default connect(mapStateToProps)(IndexPage);
