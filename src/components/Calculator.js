/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onClickhandle = (e) => {
    const num = calculate(this.state, e.target.value);
    this.setState(num);
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        {/* result */}
        <div className="result">
          <span className="result_value">{next || total ? next || total : 0 }</span>
        </div>
        {/* calculation */}
        <div className="rows">
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="AC"
          >
            AC
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="+/-"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="%"
          >
            %
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="orange_calc"
            value="÷"
          >
            ÷
          </button>
        </div>
        <div className="rows">
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="7"
          >
            7
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="8"
          >
            8
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="9"
          >
            9
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="orange_calc"
            value="x"
          >
            x
          </button>
        </div>
        <div className="rows">
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="4"
          >
            4
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="5"
          >
            5
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="6"
          >
            6
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="orange_calc"
            value="-"
          >
            -
          </button>
        </div>
        <div className="rows">
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="1"
          >
            1
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="2"
          >
            2
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="white_calc"
            value="3"
          >
            3
          </button>
          <button
            type="button"
            onClick={this.onClickhandle}
            className="orange_calc"
            value="+"
          >
            +
          </button>
        </div>
        <div className="rows">
          <div className="col1">
            <button
              type="button"
              onClick={this.onClickhandle}
              className="white_calc"
              value="0"
            >
              0
            </button>
          </div>
          <div className="col2">
            <button
              type="button"
              onClick={this.onClickhandle}
              className="white_calc"
              value="."
            >
              .
            </button>
            <button
              type="button"
              onClick={this.onClickhandle}
              className="orange_calc"
              value="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
