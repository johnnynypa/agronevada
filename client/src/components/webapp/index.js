import React from 'react';
import PropTypes from 'proptypes';

class WebApp extends React.Component{
    render(){
        return(
            <div>
                <h1>WebApp</h1>
            </div>
        )
    }
}

WebApp.contextTypes = {
    router : PropTypes.func.isRequired
}

export default WebApp;