import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {

  constructor (){
    super ();

    this.state={
      list: [],
      input: ''

    };
    this.handleAddTask = this.handleAddTask.bind (this);
    this.handleRemoveTask = this.handleRemoveTask.bind (this);
  }

  handleInputChange(value){
    this.setState({input: value});
  }

  handleAddTask(value){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

handleRemoveTask(index){
 this.state.list.splice(index, 1);

    this.setState({
      list: this.state.list

    });
  }
  

  render() {
    console.log(this.state);
    let list = this.state.list.map((element, index) => {
      return (
        <Todo key={index} index={index} task={element} remove={this.handleRemoveTask} />
        
      )
    })
    return (
      <div className="App">
        <h1>To-do list: </h1>
        <div>
        <input value={this.state.input}
               placeholder= "Enter new task"
               onChange={ (e) => this.handleInputChange (e.target.value)}
        />
        <button onClick={this.handleAddTask}>Add</button>
        </div>
          <br />
          { list }
        </div>
    );
  }
}

export default App;
