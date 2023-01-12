import './styles/Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="show_result">0</div>
        <div className="numbers-oberations">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="last">&divide;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="last">&times;</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="last">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="last">+</button>
          <button type="button" className="zero-btn">0</button>
          <button type="button">.</button>
          <button type="button" className="last">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
