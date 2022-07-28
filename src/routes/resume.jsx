import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Resume extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <p className="ptext">            
                This is where my resume will go.
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

export default Resume;