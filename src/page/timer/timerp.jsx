import React, { useState, useEffect } from 'react';
import * as S from './timerp';
import Logo from '../../assets/images/Logo.png';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        let timer;
        if (running && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time <= 0) {
            setRunning(false);
        }
        return () => clearInterval(timer);
    }, [running, time]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleStartStop = () => {
        setRunning(!running);
    };

    const handleReset = () => {
        setTime(0);
        setRunning(false);
        setMinutes('');
        setSeconds('');
    };

    const handleTimeChange = () => {
        const totalSeconds = (parseInt(minutes, 10) || 0) * 60 + (parseInt(seconds, 10) || 0);
        setTime(totalSeconds);
    };

    const handleMinutesChange = (e) => {
        setMinutes(e.target.value);
    };

    const handleSecondsChange = (e) => {
        setSeconds(e.target.value);
    };

    return (
        <div>
            <S.Header>
                <S.Logo src={Logo} alt="Logo" />
            </S.Header>
            <S.TimerContainer>
                <S.TimeDisplay>{formatTime(time)}</S.TimeDisplay>
                <S.TimeInputContainer>
                    <S.TimeInput 
                        type="number"
                        value={minutes}
                        onChange={handleMinutesChange}
                        placeholder="MM"
                        min="0"
                    />
                    <S.TimeInput 
                        type="number"
                        value={seconds}
                        onChange={handleSecondsChange}
                        placeholder="SS"
                        min="0"
                        max="59"
                    />
                </S.TimeInputContainer>

                <S.ButtonContainer>                
                    <S.Button onClick={handleTimeChange}>Set Time</S.Button>
                    <S.Button onClick={handleStartStop}>
                        {running ? 'Pause' : 'Start'}
                    </S.Button>
                    <S.Button onClick={handleReset}>Reset</S.Button>
                </S.ButtonContainer>
            </S.TimerContainer>
        </div>
    );
};

export default Timer;
