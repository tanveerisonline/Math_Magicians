/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { output } = this.props;
    return <div className="result">{output}</div>;
  }
}

export default Result;
