import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    /* eslint-disable react/prop-types */
    const { handleButtonClick } = this.props;
    handleButtonClick(e.target.textContent);
  }

  render() {
    const { className, buttonName } = this.props;
    return <button type="button" className={className} onClick={this.handleButtonClick}>{buttonName}</button>;
  }
}

export default Button;
