import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const handleClick = (e) => {
    const { handleButtonClick } = props;
    handleButtonClick(e.target.textContent);
  };

  const { className, buttonName } = props;
  return (
    <button type="button" className={className} onClick={handleClick}>
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  buttonName: '',
  handleButtonClick: () => { },
};

Button.propTypes = {
  className: PropTypes.string,
  buttonName: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

export { Button as default };
