import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MarkdownProvider } from './markdownContext';
import './Styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <MarkdownProvider>
            <App />
        </MarkdownProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
