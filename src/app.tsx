import React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

const App: React.FC = () => {
    return (
        <>
            <h1>💖 Hello World!</h1>
            <p>Welcome to your Electron application.</p>
        </>
    )
}

function render() {
  ReactDOM.render(<App />, document.body);
}

render();