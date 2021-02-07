import logo from './logo.svg';
//import './App.css';
import { render } from 'react-dom';
import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js'
//import Person from './Person/Person.js' ;
//import Persons from './Persons/Persons.js' ;
//import Validation from './Validation/Validation.js' ;
//import Char from './Char/Char.js';

class App extends React.Component{
  render() {
    return(
      <div>
        <Layout>

            <BurgerBuilder/>

        </Layout>


      </div>
    );
  }

}








export default App;
/*
class App extends React.Component{

  state= {
    persons:[
  { id:'asdf1' ,name:'mac' ,nmbr:23},
  { id:'asdf1' ,name:'window' ,nmbr:55},
  
    ],
    showPersons: false
  }
  nameChangedHandler= ( event,id )=>{
    const personIndex = this.state.persons.findIndex(p=>{
       return p.id ===id ;
    });
  
    const person = {
      ...this.state.persons[personIndex]
    };
  
    person.name = event.target.value ;
    const persons= [...this.state.persons];
    persons[personIndex] = person ;
    this.setState({persons:persons});
  
    this.setState({
      persons:[
        {name:'mac',nmbr:23},
        {name: event.target.value,nmbr:55}
      ]
    })
  }
  
   deletePersonhandler = (personIndex) => {
     const persons = [...this.state.persons] ;
     persons.splice(personIndex ,1 );
     this.setState({persons: persons});
  
   }
  
  togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow})
  
  }
  
    render() {
      const style={
        textAlign:"center",
        color:"grey",
        display: "inline-block",
        padding: "16px",
        margin: "16px",
        border: "1px solid blue",
        backgroundColor:"yellow",
    }
  
      let persons=null;
      if(persons=this.state.showPersons) {
        persons= (
          <div>
            <persons
            persons = {this.state.persons}
            clicked = {this.deletePersonhandler}
            changed = {this.nameChangedHandler}
            />
            
          </div>
          /*<div>
          { this.state.persons.map( (person , index) => {
        return <Person
        click={ () => this.deletePersonhandler(index)}
        name={person.name}
        nmbr={person.nmbr} 
        key = {person.id}
        changed = {(event) => this.nameChangedHandler(event , person.id)}
        />
        })} 
      
        </div> */
       /* );
        style.backgroundColor="red";
      }
  
    return (
      <div className="App">
        <h1 className="clas">animesh dayal</h1>
        <button style={style}
        onClick={this.togglePersonsHandler}> toggle Name</button> 
      
        {persons}
      </div>
      
    );
  
    }
  
}
*/





/* ASSISNMENT 1

import UserInput from './UserInput/UserInput.js' ;
import UserOutput from './UserOutput/UserOutput.js' ;

class App extends React.Component{

state = {
  username: "animesh dayal"
}
usernamechangehandler = (event) => { //chenge the name what we get from input
this.setState ({username: event.target.value})
}

  render(){

  return (
    <div className="App">
      <UserInput changename={this.usernamechangehandler} displayname={this.state.username} />
      <UserOutput  userName="animesh"/>
        <UserOutput userName={this.state.username}/>    
        <UserOutput  userName="dayal"/>
    </div>
    //{this.usernamechangehandler} takes input and add  
    //it to {this.state.username} 
   // otherwise if the setstate would not ben used 
    //then the username in the state would have been passed  
    );

}
 */