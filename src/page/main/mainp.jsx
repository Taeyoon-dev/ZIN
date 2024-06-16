import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 import
import * as S from './mainp.js';
import Bg from '../../assets/images/BGimg.png';

export function Main() {
  const [currentWord, setCurrentWord] = useState("Hello");
  const arrow = ">";
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newWord = getNextWord(currentWord);
      setCurrentWord(newWord);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentWord]);

  const getNextWord = (currentWord) => {
    const words = ["zealously_in", "ZIN"];
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    return words[nextIndex];
  };

  return (
    <div>
      <S.FullScreenBg src={Bg}/>
      <S.Maintext>
        {currentWord}
      </S.Maintext>
      {/* Link 컴포넌트를 사용하여 페이지 간 이동을 구현 */}
      <Link to="/il">
        <S.Button>
          {arrow}
        </S.Button>
      </Link>
    </div>
  );
}

export default Main;
