import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'aboulmagd', age: 37 },
      { name: 'Max', age: 28 },
      { name: 'stehanie', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandeler = () => {
    //console.log('Was clicked');
    this.setState({
      persons: [
        { name: 'aboulmagd Ahmed', age: 37 },
        { name: 'Max', age: 28 },
        { name: 'stehanie', age: 22 }
      ]
    })
  }

  nameChangeHandeler = (event) => {
    this.setState({
      persons: [
        { name: 'aboulmagd Ahmed', age: 37 },
        { name: event.target.value, age: 28 },
        { name: 'stehanie', age: 22 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              currentName={this.state.persons[0].name}>
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangeHandeler}
              currentName={this.state.persons[1].name}>
              I am happy
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              currentName={this.state.persons[2].name}>
            </Person>
          </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
