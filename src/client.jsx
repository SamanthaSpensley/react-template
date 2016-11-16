import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Duck from './ducks';

const quackDuck = new Duck('Toby').quack();

// create component called App
const App = props => (
  // returns jsx
  <div>
    The duck says {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

// rendering App component to DOM (into class .app)
ReactDOM.render(<App message={quackDuck} />, document.querySelector('.app'));
