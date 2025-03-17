import React from 'react';

import Counter from './Counter';
import Log from './Log';

function App() {
  const [clickLog, setClickLog] = React.useState([]);
  const increment = () =>
    setClickLog([...clickLog, new Date().toLocaleString('en-US')]);
  return (
    <div className='wrapper'>
      <Counter increment={increment} count={clickLog.length} />
    </div>
  );
}

export default App;
