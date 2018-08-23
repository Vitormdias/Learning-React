import React from 'react';

const validationComponent = (props) => {
  const text = props.textLenght > 5 ? 'Text long enough' : 'Text too short';
  return <p>{text}</p>
}

export default validationComponent;