import React, { Component } from 'react'
import ReactDom from "react-dom"
import App from "./App.js"
import "./index.css"
import {BrowserRouter as Router} from "react-router-dom"


ReactDom.render(
<Router>
<App />
</Router>
, document.getElementById("root"));
