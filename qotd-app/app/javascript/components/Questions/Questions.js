import React, { useState, useEffect, Fragment } from 'react'
import Question from '../Question/Question'
import axios from 'axios'


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

  const list = questions.map(question => {
    return (<li key={question.attributes.publish_date}>{question.attributes.publish_date} - {question.attributes.qotd}</li>)
  })
  return (
    <Fragment>
      <div className="header">
        <h1>Question Of The Day</h1>
        <div className="subHeader">Plan Your Questions</div>
      </div>
      <ul>{list}</ul>
    </Fragment>
  )
}

export default Questions