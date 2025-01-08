/* eslint-disable react/prop-types */

function Book(props) {
  return (
    <div>
        <h1>{`이 책의 이름은 ${props.name} 입니다`}</h1>
        <h2>{`이 책은 총 ${props.name}페이지로 이뤄줘 있습니다.`}</h2>
    </div>
  );
}

// export : 현재 파일에서 다른 파일로 특정 코드를 내보냄
// default : 하나의 파일에서 하나의 데이터만 내보낼 수 있음
export default Book;