/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup: 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>안녕, 리액트!</h1>
      {/* 변경된 부분만 업데이트 */}
      <h2>현재 시간: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;