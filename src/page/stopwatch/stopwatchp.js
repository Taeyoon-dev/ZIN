import styled from "styled-components";

export const Header = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: white;
    box-shadow: 4px 4px 10px black;
`;

export const Logo = styled.img`
    width: 3vw;
    height: 6vh;
    margin: 2vh 0px 0px 1.5vw;
`;

export const StopwatchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: #f0f0f0;
`;

export const TimeDisplay = styled.div`
    font-size: 48px;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    &:hover {
        background-color: #0056b3;
    }
`;
