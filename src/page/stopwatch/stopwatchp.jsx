import React, { useState, useEffect } from 'react';
import * as S from './stopwatchp';
import Logo from '../../assets/images/Logo.png';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!running && time !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [running]);

    const formatTime = (time) => {
        const seconds = time % 60;
        const minutes = Math.floor(time / 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleStartStop = () => {
        setRunning(!running);
    };

    const handleReset = () => {
        setTime(0);
        setRunning(false);
    };

    return (
        <div>
            <S.Header>
                <S.Logo src={Logo} alt="Logo" />
            </S.Header>
            <S.StopwatchContainer>
                <S.TimeDisplay>{formatTime(time)}</S.TimeDisplay>
                <S.ButtonContainer>
                    <S.Button onClick={handleStartStop}>
                        {running ? 'Stop' : 'Start'}
                    </S.Button>
                    <S.Button onClick={handleReset}>Reset</S.Button>
                </S.ButtonContainer>
            </S.StopwatchContainer>
        </div>
    );
};

export default Stopwatch;
