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
    </div>
  )
}

export default App
