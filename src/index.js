import React from "react";
import ReactDOM from "react-dom";
import Landing from "./Landing/Landing";
import Services from './Services_More/Services_more';
import Error404 from './404/404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
// import Firebase, { FirebaseContext } from './Firebase';
ReactDOM.render((
    // <FirebaseContext.Provider value={new Firebase()}>
        <Router>
            <Switch>

                <Route exact path='/' component={Landing} />
                <Route path='/services/:service' component={Services} />
                <Route component={Error404} />
            </Switch>
        </Router>
    // </FirebaseContext.Provider>
)

    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
