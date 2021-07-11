import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/MainComponent';
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>

    )
}

export default App;
