import React from 'react';

export default function Button({ onClick, label }) {
  const [pressed, setPressed] = React.useState(false);

  const handleMouseDown = () => setPressed(true);
  const handleMouseUp = () => setPressed(false);
  const classes = pressed ? 'pressed' : '';
  return (
    <button
      className={classes}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}>
      {label}
    </button>
  );
}
