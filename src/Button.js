import React from 'react';

export default function Button({ onClick, label }) {
  const [pressed, setPressed] = React.useState(false);

  const handleMouseDown = () => setPressed(true);
  const handleMouseUp = () => setPressed(false);

  return (
    <button
      className={pressed && 'pressed'}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}>
      {label}
    </button>
  );
}
