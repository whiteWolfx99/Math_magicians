/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Quote from './components/Quote';
import Home from './components/Home';

export default function App() {
  return (
    <div className="app">
      <nav>
        <h1>Math Magicians</h1>
        <ul className="navbar">
          <li>
            <Link className="links border" to="/">Home</Link>
          </li>
          <li>
            <Link className="links border" to="calculator">Calculator</Link>
          </li>
          <li>
            <Link className="links" to="quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>

    </div>
  );
}
