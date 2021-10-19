import React from "react";

const DelBtn = (props) => {

    const deleteToDo = (e) => {
        console.log(`할 일 완료! id : ${props.id}`)
        console.log(props.id);
        props.todoDelete(props.id);
    }
    return (
        <button onClick={deleteToDo}>X</button>

    );
}

export default DelBtn;