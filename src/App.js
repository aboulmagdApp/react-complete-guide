import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'aboulmagd', age: 37 },
      { id: 'hgftr', name: 'Max', age: 28 },
      { id: 'kkhkh', name: 'stehanie', age: 22 }
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

  nameChangeHandeler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //const persons= this.state.persons;
    // create copy to new object
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandeler(event, person.id)} />
            })
          }
        </div>
      );
      
      btnClass = classes.Red;
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.App}>
          <h1 className={assignedClasses.join(' ')}>Hi I'm a react app</h1>
          <button className={btnClass} onClick={this.togglePersonsHandler}>
              Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
