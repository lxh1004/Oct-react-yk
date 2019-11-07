import React, { Component } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import RouterView from "./router/RouterView"
import routes from "./router/router-config"
import "./mock/index"
import "./App.css"
import store from "./store/store"
import Header from "./components/header/Header"
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                 <Router>
                     <Header />
                    <RouterView routes={routes} />
                </Router>
            </Provider>
           
        )
    }
}
