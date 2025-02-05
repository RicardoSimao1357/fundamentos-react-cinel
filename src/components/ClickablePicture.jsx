import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [currentImage, setCurrentImage] = useState(img);

  const handleClick = () => {
    setCurrentImage((prevImage) => (prevImage === img ? imgClicked : img));
  };

  return (
    <div>
      <img onClick={handleClick} src={currentImage} />
    </div>
  );
}

export default ClickablePicture;
