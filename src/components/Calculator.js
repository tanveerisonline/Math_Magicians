/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import './styles/Calculator.css';
import React, { useState } from 'react';
import calculate from './logic/CalculatorLogic';
import Result from './Result';
import Button from './Button';

let obj = {};

const Calculator = () => {
  const [output, setOutput] = useState(0);

  const handleButtonClick = (buttonName) => {
    obj = calculate(obj, buttonName);

    let outStr = '';
    if (obj.total) {
      outStr += obj.total;
    }
    if (obj.operation) {
      outStr += obj.operation;
    }
    if (obj.next) {
      outStr += obj.next;
    }
    if (outStr === '') {
      outStr += '0';
    }

    setOutput(outStr);
  };

  return (
    <div className="calculator">
      <Result output={output} />
      <div className="numbers-oberations">
        <Button handleButtonClick={handleButtonClick} className="" buttonName="AC" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="+/-" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="%" />
        <Button handleButtonClick={handleButtonClick} className="last" buttonName="÷" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="7" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="8" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="9" />
        <Button handleButtonClick={handleButtonClick} className="last" buttonName="x" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="4" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="5" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="6" />
        <Button handleButtonClick={handleButtonClick} className="last" buttonName="-" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="1" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="2" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="3" />
        <Button handleButtonClick={handleButtonClick} className="last" buttonName="+" />
        <Button handleButtonClick={handleButtonClick} className="zero-btn" buttonName="0" />
        <Button handleButtonClick={handleButtonClick} className="" buttonName="." />
        <Button handleButtonClick={handleButtonClick} className="last" buttonName="=" />
      </div>
    </div>
  );
};

export { Calculator as default };
