/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
