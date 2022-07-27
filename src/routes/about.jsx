import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class About extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <Typography>
            This is where my about will go.
        </Typography>
    );
}
    componentDidMount() {
        this.render();
    }
    componentWillUnmount() {
        return;
    }
}

export default About;