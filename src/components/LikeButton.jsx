import { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  const color = colors[likes % colors.length];

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {likes} {likes === 1 ? 'like' : 'likes'}
    </button>
  );
}

export default LikeButton;
