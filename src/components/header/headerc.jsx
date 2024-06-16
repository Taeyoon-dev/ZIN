// src/page/il/Il.jsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Timer from '../../page/timer/timerp.jsx';
import Stopwatch from '../../page/stopwatch/stopwatchp.jsx';
import TodoList from '../../page/todolist/todolistp.jsx';
import Memo from '../../page/memo/memop.jsx';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const H1 = styled.h1`
    margin-left: 3vw;
    font-size: 8vh;
    font-weight: bold;
    letter-spacing: 2vw;
`;

const Navbar = styled.nav`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled(Link)`
  display: block;
  color: black;
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
        <H1>
            Features provided by<br/>
            zealously in
        </H1>
        <Navbar>
            <NavItem>
                <NavLink to="/il/timer">Timer</NavLink>
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
