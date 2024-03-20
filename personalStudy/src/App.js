import './App.css';
import {useState} from 'react';

function App() {

  const [contentData, setContent] = useState([
    {
      'title': '남자코트 추천',
      'content': '남자코트는 알아서 찾아보시기 바랍니다',
      'createdAt': '2월 17일 발행',
      'likeCount': 0
    },
    {
      'title': '강남 우동맛집',
      'content': '맛집은 너의 생각이 다 맛집이야',
      'createdAt': '2월 17일 발행',
      'likeCount': 0
    },
    {
      'title': '파이썬 독학',
      'content': '파이썬은 독학하기 좋지 쉽잖아',
      'createdAt': '2월 17일 발행',
      'likeCount': 0
    }
  ]);
  const [modalIndex, setModalIndex] = useState({current: null, before: null});
  const [modalState, setModal] = useState(false);

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

      <button style={{display: "none"}} onClick={() => {
        firstTitleToggle()
      }}>글 수정
      </button>

      {
        contentData.map((rowData, index) => {
          return (
            <div className="list" key={index}>
              <h4>
                <span onClick={() => {
                  if (modalIndex?.current === index && modalState) {
                    setModal(false);
                  } else if (!modalState) {
                    setModal(true);
                  }

                  setModalIndex({
                    'before': modalIndex?.current,
                    'current': index
                  });
                }}>
                    {rowData.title}
                    <span onClick={(e) => {
                        e.stopPropagation();

                        let tmp = [...contentData];
                        tmp[index].likeCount = rowData.likeCount + 1;
                        setContent(tmp);
                    }}>👍</span>
                    {rowData.likeCount}
                </span>
                <span style={{paddingLeft: '20px'}}>
                  <button onClick={() => {
                      let tmp = [...contentData];
                      tmp.splice(index, 1);
                      setContent(tmp);
                  }}>test</button>
                </span>
              </h4>
              <p>{rowData.createdAt}</p>
            </div>
          )
        })
      }

      <div>
        <input type="text" id="newContentTitle"/>
        <button onClick={() => {
            const titleElement = document.getElementById('newContentTitle');
            const today = new Date();

            let tmp = [...contentData];
            tmp.push({
                    'title': titleElement.value,
                    'content': '',
                    'createdAt': (today.getMonth() + 1) + '월' + (today.getDay()) + '일 발행',
                    'likeCount': 0
            });
            setContent(tmp);

            titleElement.value = '';
        }}>글 생성</button>
      </div>

      {
        modalState ? <Modal data={contentData} index={modalIndex} modifyData={setContent}/> : null
      }

    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.data[props.index.current].title}</h4>
      <p>{props.data[props.index.current].createdAt}</p>
      <p>{props.data[props.index.current].content}</p>
      <button onClick={() => {
        if (props.index.current === 0) {
          let tmp = [...props.data];
          tmp[0].title = (props.data[0].title === '남자코트 추천') ? '여자코트 추천' : '남자코트 추천'
          props.modifyData(tmp);
        } else {
          alert('1번이 아니면 수정 안됨 ㅅㄱ');
        }
      }}>글수정
      </button>
    </div>
  )
};

export default App;
