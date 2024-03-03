import './App.css';
import {useState} from 'react';

function App() {

  const [titleData, setTitle] = useState({
    'title1': '남자코트 추천',
    'title2': '강남 우동맛집',
    'title3': '파이썬 독학'
  });
  const [likeCount, setLike] = useState(0);
  const [modalState, setModalState] = useState(false);

  const firstTitleToggle = () => {
    setTitle({
      ...titleData,
      'title1': (titleData.title1 === '남자코트 추천') ? '여자코트 추천' : '남자코트 추천'
    })
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button style={{display: "none"}} onClick={() => {
        firstTitleToggle()
      }}>
        글 수정
      </button>

      <div className="list">
        <h4>
          {titleData.title1}
          <span onClick={() => {
            setLike(likeCount + 1)
          }}>👍</span>
          {likeCount}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{titleData.title2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setModalState(!modalState)
        }}>{titleData.title3}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modalState ? <Modal/> : null
      }

    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
};

export default App;
