import React from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
  const { className, buttonLabel } = props;
  console.log('My button', className);
  return <button className={className}>{buttonLabel}</button>;
};

export default CoolButton;
