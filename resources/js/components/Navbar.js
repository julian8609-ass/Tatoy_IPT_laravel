import React from 'react';

export default function Navbar() {
  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement('a', { href: '/', className: 'nav-link' }, 'Home')
      ),
      React.createElement(
        'li',
        null,
        React.createElement('a', { href: '/about', className: 'nav-link' }, 'About Us')
      ),
      React.createElement(
        'li',
        null,
        React.createElement('a', { href: '/contact', className: 'nav-link' }, 'Contact Us')
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'form',
          { method: 'POST', action: '/logout', className: 'logout-form' },
          React.createElement('button', { type: 'submit', className: 'nav-btn' }, 'Log Out')
        )
      )
    )
  );
}
