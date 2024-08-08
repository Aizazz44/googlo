import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./context/ResultContextProvider";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <ResultContextProvider>
        <Router>
            <App/>
        </Router>
    </ResultContextProvider>
    
)

