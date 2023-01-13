/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
  const { output } = props;
  return <div className="result">{output}</div>;
};

Result.defaultProps = {
  output: '0',
};

Result.propTypes = {
  output: PropTypes.string,
};

export { Result as default };
