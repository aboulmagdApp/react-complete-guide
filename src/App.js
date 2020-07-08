import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'aboulmagd', age: 37 },
      { name: 'Max', age: 28 },
      { name: 'stehanie', age: 22 }
    ],
    otherState: 'some other value'
  });

  console.log(personsState);
  const switchNameHandeler = () => {
    //console.log('Was clicked');
    setPersonsState({
      persons: [
        { name: 'aboulmagd Ahmed', age: 37 },
        { name: 'Max', age: 28 },
        { name: 'stehanie', age: 26 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi I'm a react app</h1>
      <p>this is really working!</p>
      <button onClick={switchNameHandeler}>switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I am happy</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
    </div>
  );
}

export default App;