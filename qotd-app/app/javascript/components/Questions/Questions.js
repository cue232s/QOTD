import React, { useState, useEffect, Fragment } from 'react'
import Question from '../Questions/Question'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components'
import axios from 'axios'

const Home = styled.div`
  // text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
const HomeBody = styled.div`
  display: grid;
  grid-auto-flow: column;
`
const Header = styled.div``
const questionsPlanner = styled.div`
`
const calendar = styled.div``
const questionsPanel = styled.div``
const week = styled.div``

const Questions = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    //get all quetions from api
    //update questions in our state
    axios.get('/api/v1/questions.json')
      .then(response => {
        console.log(response)
        setQuestions(response.data.data)
      })
      .catch((err) => { console.error(err) });
  }, [questions.length])
  const [value, onChange] = useState(new Date());

  const list = questions.map(question => {
    return (
      <Question
        key={question.attributes.publish_date}
        attributes={question.attributes}
      />
    )
  })
  return (
    <Home>
      <div className="header">
        <h1>Question Of The Day</h1>
      </div>
      {/* <ul>{list}</ul> */}
      <HomeBody>
        <div className="questionsPlanner" >
          <div className="calendar">
            <div>Select a Day</div>
            <Calendar
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
        <div className="questionPanel">
          <div className="week">
            {list}
          </div>
        </div>
        <div className="AnswersPanel">
          <div className="answers">
            <div>Answers Panel</div>
          </div>
        </div>
      </HomeBody>
    </Home>
  )
}

export default Questions