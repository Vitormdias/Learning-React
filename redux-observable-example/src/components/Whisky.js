import React from 'react';

const Whisky = ({ whisky }) => (
  <div>
    <img style={{ width: '300px', height: '300px' }} src={whisky.imageUrl} alt='whisky' />
    <h3>{whisky.title}</h3>
  </div>
);

export default Whisky;