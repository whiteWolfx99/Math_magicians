/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        {/* result */}
        <div className="result">
          <span className="result_value">0</span>
        </div>
        {/* calculation */}
        <div className="rows">
          <span className="white_calc">Ac</span>
          <span className="white_calc">+/-</span>
          <span className="white_calc">%</span>
          <span className="orange_calc">/</span>
        </div>
        <div className="rows">
          <span className="white_calc">7</span>
          <span className="white_calc">8</span>
          <span className="white_calc">9</span>
          <span className="orange_calc">*</span>
        </div>
        <div className="rows">
          <span className="white_calc">4</span>
          <span className="white_calc">5</span>
          <span className="white_calc">6</span>
          <span className="orange_calc">-</span>
        </div>
        <div className="rows">
          <span className="white_calc">1</span>
          <span className="white_calc">2</span>
          <span className="white_calc">3</span>
          <span className="orange_calc">+</span>
        </div>
        <div className="rows">
          <div className="col1">
            <span className="white_calc">0</span>
          </div>
          <div className="col2">
            <span className="white_calc">.</span>
            <span className="orange_calc">=</span>
          </div>
        </div>
      </div>
    );
  }
}
