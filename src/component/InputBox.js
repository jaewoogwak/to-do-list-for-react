import React from 'react';
import '../app.css';
class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    
    handleChange = (e) => {
        if (window.event.keyCode == 13) {
            this.setState({
                text : e.target.value
            },() => {
                // async
                console.log("handleSubmit", this.state.text)
                this.handleSubmit(e);
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.todoCreate(this.state.text);
        console.log(this.state.text);
        this.setState(() => {
            this.state.text = '';
        })
        
        e.target.value = '';

    }
    render() {
        return (
            <div>
                <input className ="inputBox"
                    type="search"
                    placeholder="input to do!"
                    onKeyDown={this.handleChange}
                ></input>
            </div>

        );

    }
}

export default InputBox;