import React from 'react';
import ToDo from './Todo';
import '../app.css';

const ToDoList = (props) => {
    // componentDidMount({ this.props.toDos }) {
    //     this.setState(() => {
    //         return { list : toDos}
    //     })
    // }
    return (
        <div>
            <div>
                {props.toDos.map(data => (
                    <ToDo
                        key={data.props.id}
                        id={data.props.id}
                        todo={data.props.todo}
                        todoDelete={props.todoDelete} />
                ))}
            </div>
        </div>
    );
}
export default ToDoList;