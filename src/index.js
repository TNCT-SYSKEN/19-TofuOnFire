import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Chromeのデバック用
// const composeEnhancers = compose; // 本番用
const store = createStore(
    reducers,
    composeEnhancers(
    applyMiddleware(thunk),
    )
);

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById("root")
);