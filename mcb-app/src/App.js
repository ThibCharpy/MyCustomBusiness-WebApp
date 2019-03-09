import React from 'react'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import UserComponent from './components/user/UserComponent'
import UserForm from './components/user/UserForm'

/**
 * Main App
 */
class App extends React.Component {

    /**
     * Render html and other components
     */
    render() {
        return (
            <Router>
                <div id="AppDiv">
                    <Header title="MCB !"/>
                    <div className="container">
                        <div id="appRoot">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/users" component={UserComponent} />
                                <Route exact path="/users/new" component={UserForm} />
                                <Route path="/users/:id" component={UserForm} />
                            </Switch>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;