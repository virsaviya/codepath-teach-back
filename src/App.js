import React from 'react';

import Button from './Button';

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div className='wrapper'>
      {count}
      <br />
      <Button onClick={increment} label='increment' />
    </div>
  );
}

export default App;
