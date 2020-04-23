import React, {Component} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"

export default class App extends Component{

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} component={Admin} />
                </Switch>
            </BrowserRouter>
        )
    }

}
