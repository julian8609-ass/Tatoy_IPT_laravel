import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
/* Make sure the import matches the actual file name */
export default function AppRouter() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/', element: React.createElement(Home) }),
      React.createElement(Route, { path: '/about', element: React.createElement(About) }),
      React.createElement(Route, { path: '/contact', element: React.createElement(ContactUs) })
    )
  );
}
