import React from 'react';
import shortid from 'shortid';


export default class ToDoForm extends React.Component {

    state ={
      text: ""
    }; 

    handleChange = (Event) => {
        this.setState({
            [Event.target.name]: Event.target.value
        });
    };

    handleSubmit = (Event) => {
        Event.preventDefault();
        //submit form zie ToDoList regel22
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        /////leeg maken van inputform
        this.setState({
            text: ""
        });
    }; 

    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
            <input 
            name = "text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="ToDo....."
            />
            <button onClick={this.handleSubmit}>Add ToDo</button>
          </form>  
        );   
    }
}