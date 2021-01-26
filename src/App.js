import { Component } from 'react';
import List from './List';
import NavBar from './NavBar'
import './App.css';

const todos = [
                {id: 1, title: "read js book"},
                {id: 2, title: "read cSharp book"},
                {id: 3, title: "read react  book"}
              ]

class App extends Component {
 state = { 
   todos:[ 
    {id: 1, title: "read js book"},  
    {id: 2, title: "read cSharp book"}, 
    {id: 3, title: "read react  book"} ]
  }

  render(){

  return (
      <div className="App">
        <header className="App-header"> <h2>Todo List</h2> </header>
        <NavBar todos={this.state.todos}/>
        {/* App render todos by handing todos as a props to list */}
        <List todos={this.state.todos} />
      </div>
    );
    }
  
}

export default App;
