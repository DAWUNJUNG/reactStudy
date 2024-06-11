import './App.css'
import { useState } from 'react'

function App() {

  const [contentData, setContent] = useState([
    {
      'title': '남자코트 추천',
      'content': '남자코트는 알아서 찾아보시기 바랍니다',
      'updatedAt': '2월 17일 발행',
      'likeCount': 0,
    },
    {
      'title': '강남 우동맛집',
      'content': '맛집은 너의 생각이 다 맛집이야',
      'updatedAt': '2월 17일 발행',
      'likeCount': 0,
    },
    {
      'title': '파이썬 독학',
      'content': '파이썬은 독학하기 좋지 쉽잖아',
      'updatedAt': '2월 17일 발행',
      'likeCount': 0,
    },
  ])
  const [modalIndex, setModalIndex] = useState({ current: null, before: null });
  const [newContentModalState, setNewContentModal] = useState(false);
  const [modalState, setModal] = useState(false);

  const createNewContent = () => {
    const titleElement = document.getElementById('newContentTitle');
    const contentElement = document.getElementById('newContent');
    const today = new Date();

    if (titleElement.value === '') {
      alert('글 제목을 입력해주세요');
      return;
    }
    if (contentElement.value === '') {
      alert('글 내용을 입력해주세요');
      return;
    }

    let tmp = [...contentData]
    tmp.push({
      'title': titleElement.value,
      'content': contentElement.value,
      'updatedAt': (today.getMonth() + 1) + '월' + (today.getDay()) + '일 발행',
      'likeCount': 0,
    });
    setContent(tmp);

    titleElement.value = '';
    contentElement.value = '';

    setNewContentModal(false);
  }

  const delContent = (index) => {
    let tmp = [...contentData];
    tmp.splice(index, 1);
    setContent(tmp);
    setModal(false);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {
        contentData.map((rowData, index) => {
          return (
            <div className='list' key={index}>
              <h4>
                <span onClick={() => {
                  if (modalIndex?.current === index && modalState) {
                    setModal(false);
                  } else if (!modalState) {
                    setModal(true);
                  } else {
                    document.getElementById('viewContent').classList.remove('hide');
                    document.getElementById('inputContent').classList.add('hide');
                  }

                  setModalIndex({
                    'before': modalIndex?.current,
                    'current': index,
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
              </h4>
              <p>{rowData.updatedAt}</p>
            </div>
          )
        })
      }
      <div id="bottomContent">
        <button onClick={() => {setNewContentModal(!newContentModalState);}}>글 생성하기</button>
      </div>
      {
        newContentModalState ?
          <CreateContentModal createNewContent={createNewContent}/> : null
      }

      {
        modalState ?
          <Modal data={contentData} index={modalIndex} modifyData={setContent} delContent={delContent} /> : null
      }

    </div>
  )
}

const CreateContentModal = (props) => {
  return (
    <div className='modal'>
      <div>
        글 제목 : <input type='text' id='newContentTitle' />
      </div>
      <div>
        글 내용 : <input type='text' id='newContent' />
      </div>
      <button id='newContentSubmitBtn' onClick={() => {
        props.createNewContent();
      }}>새로운 글 생성하기
      </button>
    </div>
  )
}

const Modal = (props) => {
  return (
    <div className='modal'>
      <div id='viewContent'>
        <h4>{props.data[props.index.current].title}</h4>
        <p>{props.data[props.index.current].content}</p>
        <p>{props.data[props.index.current].updatedAt}</p>
        <button id='modifyBtn' onClick={() => {
          document.getElementById('viewContent').classList.add('hide');
          document.getElementById('inputContent').classList.remove('hide');
        }}>글수정
        </button>
        <button onClick={() => {
          props.delContent(props.index.current);
        }}>삭제
        </button>
      </div>
      <div id='inputContent' className='hide'>
        <div>
          글 제목 : <input type='text' id='titleInput' value={props.data[props.index.current].title} />
        </div>
        <div>
          글 내용 : <input type='text' id='contentInput' value={props.data[props.index.current].content} />
        </div>
        <button id='submitBtn' onClick={() => {
          let tmp = [...props.data];
          const today = new Date();

          const title = document.getElementById('titleInput').value;
          const content = document.getElementById('contentInput').value;

          if (title === '') {
            alert('글 제목을 입력해주세요');
            return;
          }
          if (content === '') {
            alert('글 내용을 입력해주세요');
            return;
          }

          tmp[props.index.current] = {
            'title': title,
            'content': content,
            'updatedAt': (today.getMonth() + 1) + '월' + (today.getDay()) + '일 발행',
            'likeCount': props.data[props.index.current].likeCount,
          };
          props.modifyData(tmp);

          alert('수정 되었습니다.');

          document.getElementById('viewContent').classList.remove('hide');
          document.getElementById('inputContent').classList.add('hide');
        }}>적용
        </button>
      </div>
    </div>
  )
}

export default App
