import React from 'react';
import ToDo from './Todo';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list : []
        }
    }

    // componentDidMount({ this.props.toDos }) {
    //     this.setState(() => {
    //         return { list : toDos}
    //     })
    // }
    render() {
        return (
            <div>
                <h1> To Do list</h1>
                {console.log(this.props.toDos)}
                <div>
                    {
                    this.props.toDos.map(data => (
                        <ToDo key = {data.props.id} id = {data.props.id} todo ={data.props.todo} todoDelete ={this.props.todoDelete}/> 
                    ))}
                </div>
            
            </div>
        );
    }
}

export default ToDoList;