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
                <Header title="MCB !"/>
                <div class="container">
                    <p>App body !</p>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;