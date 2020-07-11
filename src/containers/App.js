import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandeler}/>;
    }
  
    return (
        <div className={classes.App}>
         <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
