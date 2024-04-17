import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {

  const [content, setContent] = useState([
    {
      'title': '남자코트 추천',
      'likeCount': 0,
    },
    {
      'title': '강남 우동맛집',
      'likeCount': 0,
    },
    {
      'title': '파이썬독학',
      'likeCount': 0,
    },
  ])

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
        <span onClick={() => {
          let tmp = { ...content }
          tmp[0].title = (tmp[0].title === '남자코트 추천') ? '여자코트 추천' : '남자코트 추천'
          setContent(tmp)
        }}>
          첫번째 글 변경
          </span>
      </div>
      <button onClick={() => {
        let tmp = [...content]
        tmp.sort((first, second) => first.title.toLowerCase() < second.title.toLowerCase() ? -1 : 1)
        setContent(tmp)
      }}>오름차순 정렬</button>
      <div className='list'>
        <h4>{content[0].title}
          <span onClick={() => {
            let tmp = { ...content }
            tmp[0].likeCount += 1
            setContent(tmp)
          }}>👍</span> {content[0].likeCount} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{content[1].title}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{content[2].title}</h4>
        <p>2월 17일 발행</p>
      </div>

      <TestComponent/>
      <Modal/>

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
  );
};

const TestComponent = () => {
  return (
    <div>hello world!</div>
  );
};

export default App
