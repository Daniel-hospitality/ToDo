import React from "react";
import ToDoForm from "./ToDoForm";
import ToDo1 from "./ToDo1";
// import ToDoForm from "./ToDoForm"

/* Todo
    1.Ad todo
    2.display todo
    3.Cross off todo
    4.show number of active todos
    5. filter all/active/complete
    6. delete todo
    7. delete all complete
    7.1 only show if atleast one is complete
    8. button to toggle all on/off
    https://www.youtube.com/watch?v=I6IY2TqnPDA
*/

export default class ToDoList extends React.Component {
  ////regel 7 tm 16 is array van todos submit
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos],
    }));
  };

  toggleComplete = (id) => {
    this.setState(state => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          //suppse to update regel 38,39 zijn gelijk an r37
          return {
            ...todo,
            // id: todo.id,
            // text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState(state => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div className="MainApp">
        
        <ToDoForm onSubmit={this.addTodo} />
        {/* {JSON.stringify(this.state.todos)} */}
        {/* stap 2 van het text return */}
        {todos.map((todo) => (
          <ToDo1
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>

        <div>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            complete
          </button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
            <div>
                <button onClick={this.removeAllTodosThatAreComplete}>
                    remove all complete todos
                </button>
            </div>    
        ) : null}
        <div>
          <button
            onClick={() =>
             this.setState(state => ({
               todos: state.todos.map(todo => ({
                 ...todo,
                 complete: state.toggleAllComplete
               })),
               toggleAllComplete: !state.toggleAllComplete
             }))
            }
          >toggle all complete: {`${this.state.toggleAllComplete}`}
          </button>  
           
           
        </div>
      </div>
    );
  };
};
