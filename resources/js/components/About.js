import React from 'react';

export default function About() {
  return React.createElement(
    'div',
    { className: 'about' },
    React.createElement('h1', null, 'About Us'),
    React.createElement(
      'p',
      null,
      'We are a passionate team dedicated to creating beautiful web applications. Our mission is to make development simple, elegant, and enjoyable 🚀'
    )
  );
}
