import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [list, setList] = useState([])

  return (
    <div className="App">
      <Input list={list} setList={setList} />
      {list.map((task, idx) => (
        <Task task={task} setList={setList} index={idx} list={list} />
      ))}
    </div>
  );
}

export default App;