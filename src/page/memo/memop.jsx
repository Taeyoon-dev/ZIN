import React, { useState, useEffect } from 'react';
import * as S from './memop.js';
import Logo from '../../assets/images/Logo.png';

const MEMO_STORAGE_KEY = 'memos';

export function Memo() {
    const [memos, setMemos] = useState([]);
    const [memoText, setMemoText] = useState("");

    useEffect(() => {
        const storedMemos = localStorage.getItem(MEMO_STORAGE_KEY);
        if (storedMemos) {
            setMemos(JSON.parse(storedMemos));
        }
    }, []);

    const addMemo = () => {
        if (memoText.trim()) {
            const newMemos = [...memos, memoText];
            setMemos(newMemos);
            setMemoText("");
            localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(newMemos));
        }
    };

    const deleteMemo = (index) => {
        const newMemos = memos.filter((_, i) => i !== index);
        setMemos(newMemos);
        localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(newMemos));
    };

    return (
        <div>
            <S.Header>
                <S.Logo src={Logo} />
            </S.Header>
            <S.Container>
                <S.MemoBox>
                    <S.MemoInput 
                        value={memoText}
                        onChange={(e) => setMemoText(e.target.value)}
                        placeholder="여기에 입력해주세요."
                    />
                    <S.AddButton onClick={addMemo}>Add Memo</S.AddButton>
                    <S.MemoList>
                        {memos.map((memo, index) => (
                            <S.MemoItem key={index}>
                                {memo}
                                <S.DeleteButton onClick={() => deleteMemo(index)}>Delete</S.DeleteButton>
                            </S.MemoItem>
                        ))}
                    </S.MemoList>
                </S.MemoBox>
                <S.Sidebar>
                    <h3>Delete Memos</h3>
                    <S.MemoList>
                        {memos.map((memo, index) => (
                            <S.MemoItem key={index}>
                                {memo}
                                <S.DeleteButton onClick={() => deleteMemo(index)}>Delete</S.DeleteButton>
                            </S.MemoItem>
                        ))}
                    </S.MemoList>
                </S.Sidebar>
            </S.Container>
        </div>
    );
}

export default Memo;
