import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Main App
 */
class App extends React.Component {

    /**
     * Render html and other components function function
     */
    render() {
        return (
            <div id="AppDiv">
                <Header title="My Custom Business web app !"/>
                <p>App body !</p>
                <Footer />
            </div>
        );
    }
}

export default App;