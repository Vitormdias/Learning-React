import React from 'react';

import Whisky from './Whisky';

const WhiskyGrid = ({ whiskies }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
    {whiskies.map(whisky => (<Whisky key={whisky.id} whisky={whisky} />))}
  </div>
);

export default WhiskyGrid;