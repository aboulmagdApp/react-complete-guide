import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


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

  deletePersonHandler = (personIndex) =>{
    //const persons= this.state.persons;
    // create copy to new object
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {
            this.state.persons.map((person, index) =>{
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}/>
            })
          }
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
