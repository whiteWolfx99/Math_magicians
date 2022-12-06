/* eslint-disable react/prefer-stateless-function */
import { useState } from 'react';
import calculate from './logic/calculate';
import './Calculator.css';

export default function Calculator() {
  const [math, setMath] = useState({
    next: null,
    operation: null,
    total: null,
  });

  const onClickhandle = (e) => {
    setMath((math) => calculate(math, e.target.value));
  };

  return (
    <div className="calculator">
      {/* result */}
      <div className="result">
        <span className="result_value">{(math.next || math.total) ? (math.next || math.total) : (0) }</span>
      </div>
      {/* calculation */}
      <div className="rows">
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="AC"
        >
          AC
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="+/-"
        >
          +/-
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="%"
        >
          %
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="orange_calc"
          value="÷"
        >
          ÷
        </button>
      </div>
      <div className="rows">
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="7"
        >
          7
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="8"
        >
          8
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="9"
        >
          9
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="orange_calc"
          value="x"
        >
          x
        </button>
      </div>
      <div className="rows">
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="4"
        >
          4
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="5"
        >
          5
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="6"
        >
          6
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="orange_calc"
          value="-"
        >
          -
        </button>
      </div>
      <div className="rows">
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="1"
        >
          1
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="2"
        >
          2
        </button>
        <button
          type="button"
          onClick={onClickhandle}
          className="white_calc"
          value="3"
        >
          3
        </button>
        <button
          type="button"
          onClick={onClickhandle}
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
            onClick={onClickhandle}
            className="white_calc"
            value="0"
          >
            0
          </button>
        </div>
        <div className="col2">
          <button
            type="button"
            onClick={onClickhandle}
            className="white_calc"
            value="."
          >
            .
          </button>
          <button
            type="button"
            onClick={onClickhandle}
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
