import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";

const appRoot = ReactDOM.createRoot(root);

export function App() {
    return (
        <> 
            <Heading name = { "component props" } />
        </>
    )
    
}

appRoot.render(<App />);