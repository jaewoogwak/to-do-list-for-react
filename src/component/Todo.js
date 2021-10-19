import React from 'react';
import DelBtn from './DelBtn';
import DoneBtn from './DoneBtn';


const ToDo = (props) => {
    return (
        <div>
            <div id = {props.id}>
                <span id = "todo-text" >{`🍐 ${props.todo} `  }</span>
                <DoneBtn />
                <DelBtn id = {props.id} todoDelete = {props.todoDelete}/>
                {console.log("DelBtn로 전달: ", props.todoDelete)}

            </div>
        </div>

    );
}

export default ToDo;