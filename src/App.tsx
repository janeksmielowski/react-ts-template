import React, { FunctionComponent } from 'react';

// @ts-ignore
import logo from './logo.svg';
import './App.css';

const App: FunctionComponent = () => (
    <div className='App'>
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className='App-link'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'>
                Learn React
            </a>
        </header>
    </div>
);

export default App;
