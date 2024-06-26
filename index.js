import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/style.css';

const appRoot = ReactDOM.createRoot(root);

export function App() {
    return (
        <> 
            <Main name = { "component props" } />
        </>
    )
    
}

appRoot.render(<App />);