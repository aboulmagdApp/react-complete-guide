import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    // we use react hook useEffect with empty array to run code inside only when once when load
    // or if we put arry will run code every change in array
    useEffect(() =>{
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('saved data to cloud');
        }, 1000);
        
    },[]);

    let assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Hi I'm a react app</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
          </button>
        </div>
    );
}

export default Cockpit;