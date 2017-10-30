import React from 'react';
import PropTypes from 'proptypes';

class IndexPage extends React.Component{
    componentWillMount(){
        this.context.router.history.push('/app');
    }
    render(){
        return(
            <div></div>
        )
    }
}

IndexPage.contextTypes = {
    router : PropTypes.func.isRequired
}
  
export default IndexPage;