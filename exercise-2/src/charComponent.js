import React from 'react';
import './charComponent.css';

const charComponent = (props) => {
  return <div className="char" onClick={props.onClick}>{props.char}</div>
}

export default charComponent;