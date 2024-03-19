import { useState } from 'react';
import Box from './component/Box';
import './App.css';

// 1. 박스 2개(타이틀,사진,결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3번4번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리 색이 바뀐다(이기면-초록, 지면-빨강,비기면-검은색)
const choice = {
  rock : {
    name : "Rock",
    img : "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
    alt : "주먹"
  },
  scissors : {
    name : "Scissors",
    img : "https://www.ikea.com/kr/en/images/products/manoega-scissors-stainless-steel-black__1215197_pe911911_s5.jpg?f=s",
    alt : "가위"
  },
  paper : {
    name : "Paper",
    img : "https://cmscontents.miricanvas.com/2021/01/11160057/%EB%A1%A4%EB%A7%81%ED%8E%98%EC%9D%B4%ED%8D%BC-%EC%83%98%ED%94%8C-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B3%B5%EC%A0%9C%ED%95%98%EA%B8%B0.gif",
    alt : "보자기"
  }
}
function App() {
  const [ userSelect, setUserSelect ] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className='main'>
        <button onClick={()=> play("scissors")}>가위</button>
        <button onClick={()=> play("rock")}>바위</button>
        <button onClick={()=> play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
