import React, { useState, useEffect } from 'react';
import * as S from './todolistp';
import Logo from '../../assets/images/Logo.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // 로컬스토리지에서 데이터 불러오기
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // 할일이 변경될 때마다 로컬스토리지에 저장
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (task && date) {
            const newTask = { task, date: date.toISOString() };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setTask('');
            setDate(new Date());

            // 로컬 스토리지에 새로운 항목 저장
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);

        // 로컬 스토리지에서 삭제된 항목 제거
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const openModal = (date) => {
        setSelectedDate(date);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedDate(null);
    };

    const tasksForDate = tasks.filter((task) =>
        new Date(task.date).toDateString() === new Date(selectedDate).toDateString()
    );

    return (
        <div>
            <S.Header>
                <S.Logo src={Logo} alt="Logo" />
            </S.Header>
            <S.Main>
                <S.InputContainer>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="할일을 입력하세요"
                        style={{ marginRight: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="date"
                        value={date.toISOString().substring(0, 10)}
                        onChange={(e) => setDate(new Date(e.target.value))}
                        style={{ marginRight: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <button onClick={addTask} style={{ padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>추가</button>
                </S.InputContainer>
                <S.Sidebar>
                    <h2>할일 목록</h2>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                {task.task} - {new Date(task.date).toLocaleDateString()}
                                <button onClick={() => deleteTask(index)}>삭제</button>
                            </li>
                        ))}
                    </ul>
                </S.Sidebar>
                <S.CalendarWrapper>
                    <Calendar
                        value={date}
                        onChange={setDate}
                        tileContent={({ date, view }) =>
                            view === 'month' && tasks.some(task => new Date(task.date).toDateString() === date.toDateString())
                                ? <div className="dot"></div>
                                : null
                        }
                        onClickDay={(value) => openModal(value)}
                    />
                </S.CalendarWrapper>
            </S.Main>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div>
                    <h2>{selectedDate && new Date(selectedDate).toLocaleDateString()}</h2>
                    <ul>
                        {tasksForDate.map((task, index) => (
                            <li key={index}>{task.task}</li>
                        ))}
                    </ul>
                    <button onClick={closeModal} style={{ padding: '5px 10px', backgroundColor: '#ccc', color: '#333', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>닫기</button>
                </div>
            </Modal>
        </div>
    );
};

export default Todolist;
