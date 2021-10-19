import React from 'react';
import ToDo from '../component/Todo';
import ToDoList from '../component/ToDoList';
import InputBox from '../component/InputBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      id : 1
    };
  }

  makeToDo = (data) => {
    console.log('makeToDo');
    this.setState({
      id : this.state.id + 1,
      toDos : this.state.toDos.concat(<ToDo id = {this.state.id} todo ={data}/>)
    })
  }

  deleteToDo = (id) => {
    console.log('deleteToDo', id);
    this.setState({
      toDos : this.state.toDos.filter(toDo => toDo.props.id !== id)
    })
  }

  render() {
    return (
      <div>
        <InputBox todoCreate={this.makeToDo} />
        <ToDoList toDos={this.state.toDos} todoDelete = {this.deleteToDo} />
        {console.log("ToDolist로 전달: ", this.deleteToDo)}
      </div>
    );
  }
}

export default App;
