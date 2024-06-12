import React from 'react';
import DateForm from './components/DataForm';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Date Checker</h1>
            </header>
            <DateForm />
        </div>
    );
}

export default App;
