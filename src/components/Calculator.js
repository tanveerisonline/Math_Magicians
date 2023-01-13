/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import './styles/Calculator.css';
import React from 'react';
import calculate from './logic/CalculatorLogic';
import Result from './Result';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: '0' };
    this.obj = {};
  }

  handleButtonClick = (buttonName) => {
    this.obj = calculate(this.obj, buttonName);

    if (this.obj.operation && !this.obj.next) {
      this.setState({ output: this.obj.operation });
    } else if (this.obj.next) {
      this.setState({ output: this.obj.next });
    } else if (this.obj.total) {
      this.setState({ output: this.obj.total });
    } else {
      this.setState({ output: 0 });
    }
  }

  render() {
    const { output } = this.state;
    return (
      <div className="calculator">
        <Result output={output} />
        <div className="numbers-oberations">
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="AC" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="+/-" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="%" />
          <Button handleButtonClick={this.handleButtonClick} className="last" buttonName="&divide;" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="7" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="8" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="9" />
          <Button handleButtonClick={this.handleButtonClick} className="last" buttonName="x" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="4" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="5" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="6" />
          <Button handleButtonClick={this.handleButtonClick} className="last" buttonName="-" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="1" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="2" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="3" />
          <Button handleButtonClick={this.handleButtonClick} className="last" buttonName="+" />
          <Button handleButtonClick={this.handleButtonClick} className="zero-btn" buttonName="0" />
          <Button handleButtonClick={this.handleButtonClick} className="" buttonName="." />
          <Button handleButtonClick={this.handleButtonClick} className="last" buttonName="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
