import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'aboulmagd', age: 37},
      {name: 'Max', age: 28},
      {name: 'stehanie', age: 22}
    ],
    otherState: 'some other value'
  }

  switchNameHandeler = () =>{
    //console.log('Was clicked');
    this.setState({
      persons: [
        {name: 'aboulmagd Ahmed', age: 37},
        {name: 'Max', age: 28},
        {name: 'stehanie', age: 22}
      ]
    })
  }

  nameChangeHandeler = (event) =>{
    this.setState({
      persons: [
        {name: 'aboulmagd Ahmed', age: 37},
        {name: event.target.value, age: 28},
        {name: 'stehanie', age: 22}
      ]
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <button style={style} onClick={this.switchNameHandeler}>switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
          </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandeler}>
          I am happy
          </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;
