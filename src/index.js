import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

import { ApplicationProvider} from './contexts/application.context';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApplicationProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApplicationProvider>
    </React.StrictMode>
);
