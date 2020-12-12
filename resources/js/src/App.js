import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

const App = () => {
    return (
        <Router className="App_container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));