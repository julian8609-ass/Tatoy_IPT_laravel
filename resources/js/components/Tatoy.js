import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './components/router';

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(<Router />);
}