import styled from 'styled-components';

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

export const Main = styled.main`
    display: flex;
    flex-direction: column; /* 세로 방향으로 배치 */
    align-items: center; /* 가운데 정렬 */
    justify-content: center; /* 수직 가운데 정렬 */
    height: 80vh; /* Header와 Footer를 제외한 영역을 모두 차지하도록 설정 */
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; /* 가운데 정렬 */
    margin-top: 12vh;
`;

export const Sidebar = styled.div`
    width: 300px;
    padding: 20px;
    background-color: #f4f4f4;
    position: absolute;
    top: 12vh;
    right: 0;
`;

export const CalendarWrapper = styled.div`
    max-width: 600px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin-top: 20px; /* 입력칸과 사이드바 사이의 간격 추가 */
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;
