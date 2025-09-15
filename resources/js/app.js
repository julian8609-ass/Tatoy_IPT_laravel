import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <p>This content is rendered by React.</p>
        </div>
    );
}

ReactDOM.render(<Home />, document.getElementById('root'));
