import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { render } from "react-dom";

// routes
import About from "./routes/about";
import Music from "./routes/music";
import Projects from "./routes/projects";
import Resume from "./routes/resume";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="music" element={<Music />} />
            <Route path="resume" element={<Resume />} />
        </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
