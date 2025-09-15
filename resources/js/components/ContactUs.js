import React from 'react';

export default function ContactUS() {
  return React.createElement(
    'div',
    { className: 'contact-us' },
    React.createElement('h1', null, 'Contact Us'),
    React.createElement(
      'p',
      null,
      'We would love to hear from you! Please fill out the form below to get in touch with us.'
    ),
    React.createElement(
      'form',
      { action: '/submit-form', method: 'POST' },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement('label', { htmlFor: 'name' }, 'Your Name'),
        React.createElement('input', {
          type: 'text',
          id: 'name',
          name: 'name',
          placeholder: 'Enter your name',
          required: true
        })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement('label', { htmlFor: 'email' }, 'Your Email'),
        React.createElement('input', {
          type: 'email',
          id: 'email',
          name: 'email',
          placeholder: 'Enter your email',
          required: true
        })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement('label', { htmlFor: 'message' }, 'Your Message'),
        React.createElement('textarea', {
          id: 'message',
          name: 'message',
          placeholder: 'Enter your message',
          rows: '4',
          required: true
        })
      ),
      React.createElement(
        'button',
        { type: 'submit' },
        'Submit'
      )
    )
  );
}
