import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import PostList from "./containers/PostList";

// Component
import WrapContents from "./components/WrapContents";

// Container
// 後で書け

const NotFound = () => {
    return(
        <h2>ページが見つかりませんでした…</h2>
    )
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={WrapContents(Home)} />
                </Switch>
            </div>
        );
    }
}

export default App;