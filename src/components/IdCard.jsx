import React from 'react';

/*

Iteration 1 | Component: IdCard

Create and render an IdCard component with 6 props:

lastName: A string
firstName: A string
gender: A string, 'male' or 'female'
height: A number
birth: A date
picture: A string 

*/

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;

  const heightMeters = height / 100;

  const birthText = birth.toDateString();

  // const genderClass = gender === 'male' ? 'gender-male' : 'gender-female';

  return (
    <div className={`id-card ${gender}`}>
      <img src={picture}></img>
      <div className="info">
        <div>
          <strong>First Name: </strong> {firstName}
        </div>
        <div>
          <strong>Last Name: </strong> {lastName}
        </div>
        <div>
          <strong>Gender: </strong> {gender}
        </div>
        <div>
          <strong>Height: </strong> {heightMeters}m
        </div>
        <div>
          <strong>Birth: </strong> {birthText}
        </div>
      </div>
    </div>
  );
}

export default IdCard;
