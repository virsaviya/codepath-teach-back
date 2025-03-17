import React from 'react';

import Button from './Button';

function Counter({ show }) {
  let count = 0;
  const increment = () => (count = count + 1);

  return (
    <>
      <p>{count}</p>
      <Button onClick={increment} label='increment' />
    </>
  );
}

export default Counter;
