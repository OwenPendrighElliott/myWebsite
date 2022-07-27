import './App.css';
import { Outlet, Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from '@material-ui/core'

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <AppBar title="App Bar" position="static" style={{ borderRadius: "80px" }}>
                <Tabs centered>
                    <Tab label="About" to="/about" component={Link}></Tab>
                    <Tab label="Projects" to="/projects" component={Link}></Tab>
                    <Tab label="Music" to="/music" component={Link}></Tab>
                    <Tab label="Resume" to="/resume" component={Link}></Tab>
                </Tabs>
            </AppBar>
            <Outlet />
        </header>
    </div>
    );
}

export default App;
