// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './page/main/mainp.jsx';
import Il from './page/il/ilp.jsx';
import Timer from './page/timer/timerp.jsx';
import Stopwatch from './page/stopwatch/stopwatchp.jsx';
import TodoList from './page/todolist/todolistp.jsx';
import Memo from './page/memo/memop.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/il/*" element={<Il />} />
        <Route path="/il/timer" element={<Timer />} />
        <Route path="/il/stopwatch" element={<Stopwatch />} />
        <Route path="/il/todolist" element={<TodoList />} />
        <Route path="/il/memo" element={<Memo />} />
      </Routes>
    </Router>
  );
};

export default App;
