import './App.css';
import {useState} from 'react';

function App() {

  const [contentData, setContent] = useState([
    {
      'title': '남자코트 추천',
      'likeCount': 0
    },
    {
      'title': '강남 우동맛집',
      'likeCount': 0
    },
    {
      'title': '파이썬 독학',
      'likeCount': 0
    }
  ]);
  const [modalState] = useState(false);

  const firstTitleToggle = () => {
    setContent([
      ...contentData,
      contentData[0].title = (contentData[0].title === '남자코트 추천') ? '여자코트 추천' : '남자코트 추천'
    ])
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button style={{display: "none"}} onClick={() => { firstTitleToggle() }}>글 수정</button>

      {
        contentData.map((rowData, index) => {
          return (
            <div className="list" key={index}>
              <h4>
                {rowData.title}
                <span onClick={() => {
                  let tmp = [...contentData];
                  tmp[index].likeCount = rowData.likeCount + 1;
                  setContent(tmp)
                }}>👍</span>
                {rowData.likeCount}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

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
