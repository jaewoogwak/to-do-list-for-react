import React from 'react';
import ToDo from './Todo';

class AddBtn extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <button onClick = {this.props.enterToDo}>+</button>

        );
    }
}

export default AddBtn;