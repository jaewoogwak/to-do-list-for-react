import React from 'react';
import ToDo from '../component/Todo';
import ToDoList from '../component/ToDoList';
import InputBox from '../component/InputBox';
import '../app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      id: 1
    };
  }
  // fff  

  makeToDo = (data) => {
    console.log('makeToDo');
    this.setState({
      id: this.state.id + 1,
      toDos: this.state.toDos.concat(<ToDo id={this.state.id} todo={data} />)
    })
  }

  deleteToDo = (id) => {
    console.log('deleteToDo', id);
    this.setState({
      toDos: this.state.toDos.filter(toDo => toDo.props.id !== id)
    })
  }

  render() {
    return (
      <div class="main-app">
        <h1 class ="main-text"> To Do list</h1>
        <div class ="input zone">
          <InputBox todoCreate={this.makeToDo} />
        </div>
        <div class ="toDos zone">
          <ToDoList toDos={this.state.toDos} todoDelete={this.deleteToDo} />
        </div>
        {console.log("ToDolist로 전달: ", this.deleteToDo)}
      </div>
    );
  }
}

export default App;
