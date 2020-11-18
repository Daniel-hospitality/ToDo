import React from "react";
import "./App.css";

import MyCalendar from "./Components/Calander";
import ToDo from "./Components/ToDo";
import Klick from "./Components/Klick";
import Testapi from "./Components/Testapi";
import ToDoList from "./Components/ToDoList";
// import NLHoliday from './Components/Holiday'

function App() {
  return (
    <div >
      <h1>ToDo List</h1>

      <div className="TestTodo">
        {/* <p>Calendar begin</p> */}
        <MyCalendar />
        <ToDoList />

        {/* <NLHoliday /> */}
        {/* <p>+ of - en Hide</p> */}
        {/* <Klick /> */}
        {/* <p>ToDo Start</p> */}
        {/* <ToDo /> */}
        {/* <p>gif search test</p> */}
        {/* <Testapi /> */}
      </div>
    </div>
  );
}

export default App;
