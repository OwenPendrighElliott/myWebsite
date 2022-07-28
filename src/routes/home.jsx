import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
    constructor(props){
        super(props);

        this.contentSource = "https://owen-elliott-website-content.s3.ap-southeast-2.amazonaws.com/about.json";

        this.state = fetch(this.contentSource)
                     .then(response => response.json())
                     .catch(error => {
                        console.error(error);
                     });
    }
    render(){
        return (
        <p className="ptext">
            This is where my about will go.
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

export default Home;