import './App.css';
import { Outlet, Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { useState } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: [
            'Titillium Web', 'sans-serif',
        ].join(','),
        },
    });


function App() {

    const theme = responsiveFontSizes(darkTheme);

    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <header className="App-header">
                <AppBar title="App Bar" 
                        position="static" 
                        style={{ borderRadius: "80px", backgroundColor: "#444444", }}
                        >

                    <Tabs centered 
                          value={value} 
                          onChange={handleChange}
                          TabIndicatorProps={{style: {background:'#4ec9b0'}}}
                          >

                        <Tab label="Home" to="/home" value={"home"} component={Link}></Tab>
                        <Tab label="Projects" to="/projects" value={"projects"} component={Link}></Tab>
                        <Tab label="Music" to="/music" value={"music"} component={Link}></Tab>
                        <Tab label="Resume" to="/resume" value={"resume"} component={Link}></Tab>
                    </Tabs>
                </AppBar>
                <div className="gap"></div>
                <Outlet  />
            </header>
        </ThemeProvider>
    </div>
    );
}

export default App;
