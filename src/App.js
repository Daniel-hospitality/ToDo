import React from 'react';
import  './App.css';

import MyCalendar from './Components/Calander';
// import MyApp from './Components/Calander2';
// import ToDo from "./Components/ToDo";
// import Klick from "./Components/Klick";
// import Testapi from "./Components/Testapi";
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div >
      <h1>ToDo List</h1>

      <div className="TestTodo">
        <MyCalendar 
        tileClassname = {(
        ({ date}) => date.getDay() === 3 ? 'wednesday' : null )}/>
        <ToDoList />
        

       
      </div>
    </div>
  );
}



export default App;
