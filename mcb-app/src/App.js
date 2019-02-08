import React from 'react'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import UserComponent from './components/user/UserComponent'

/**
 * Main App
 */
class App extends React.Component {

    /**
     * Render html and other components function function
     */
    render() {
        return (
            <Router>
                <div id="AppDiv">
                    <Header title="MCB !"/>
                    <div class="container">
                        <div id="appRoot">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route path="/users" component={UserComponent} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;