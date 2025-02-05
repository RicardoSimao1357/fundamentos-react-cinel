import React from 'react';

function Greetings({ lang, children }) {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  const greeting = greetings[lang] 

  return (
    <div className="greetings">
      {greeting} {children}
    </div>
  );
}

export default Greetings;
