// src/page/il/Il.jsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Timer from '../timer/timerp.jsx';
import Stopwatch from '../stopwatch/stopwatchp.jsx';
import TodoList from '../todolist/todolistp.jsx';
import Memo from '../memo/memop.jsx';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Navbar = styled.nav`
  background-color: #333;
  height: 100vh;
  overflow: hidden;
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const Il = () => {
  return (
    <Container>
      <Navbar>
        <ul>
          <NavItem>
            <NavLink to="/il/timer">타이머</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/il/stopwatch">스톱워치</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/il/todolist">할 일 목록</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/il/memo">메모</NavLink>
          </NavItem>
        </ul>
      </Navbar>

      <Routes>
        <Route path="/il/timer" element={<Timer />} />
        <Route path="/il/stopwatch" element={<Stopwatch />} />
        <Route path="/il/todolist" element={<TodoList />} />
        <Route path="/il/memo" element={<Memo />} />
      </Routes>
    </Container>
  );
};

export default Il;
