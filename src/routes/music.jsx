import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Music extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <p className="ptext">            
                This is where my music will go.
            </p>
    );
}
    componentDidMount() {
        this.render();
    }
    componentWillUnmount() {
        return;
    }
}

export default Music;