import React from 'react';

function Log({ log }) {
  return (
    <div className='log'>
      {log.map((l, i) => (
        <div key={`log-${i}`}>{l}</div>
      ))}
    </div>
  );
}

export default Log;
