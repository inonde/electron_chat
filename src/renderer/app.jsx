import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./login";
import SignUp from "./signup";
import Rooms from "./rooms";
import Room from "./room";
import firebase from "firebase/firebase-browser"

const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="login" component={Login} />
            <Route path="signup" component={SignUp} />
            <Route path="rooms" component={Rooms}>
                <Route path=":roomId" component={Room} />
            </Route>
        </Route>
    </Router>
);

if (!location.hash.length) {
    location.hash = "#/login";
}

var config = {
    apiKey: "AIzaSyB7JCLFlIkRMTqvIWSFEzVPZ8bV0P70G_0",
    authDomain: "electron-chat-9a901.firebaseapp.com",
    databaseURL: "https://electron-chat-9a901.firebaseio.com",
    projectId: "electron-chat-9a901",
    storageBucket: "electron-chat-9a901.appspot.com",
    messagingSenderId: "358059142735"
};
firebase.initializeApp(config);

render(appRouting, document.getElementById("app"));
