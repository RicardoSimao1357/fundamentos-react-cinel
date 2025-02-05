import React from 'react';

function Random({ min, max }) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="randomNumber">
      Random value between {min} and {max} + {'=>'} {randomValue}
    </div>
  );
}

export default Random;
