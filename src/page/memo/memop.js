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

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 90vh;
`;

export const MemoBox = styled.div`
    flex: 3;
    padding: 20px;
    border-right: 1px solid #ddd;
`;

export const Sidebar = styled.div`
    flex: 1;
    background-color: #f4f4f4;
    padding: 20px;
    border-left: 1px solid #ddd;
`;

export const MemoInput = styled.textarea`
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    padding: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
`;

export const AddButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        background-color: #0056b3;
    }
`;

export const MemoList = styled.div`
    margin-top: 20px;
`;

export const MemoItem = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DeleteButton = styled.button`
    padding: 5px 10px;
    background-color: #ff0000;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #cc0000;
    }
`;
