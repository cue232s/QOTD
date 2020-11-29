import React from 'react'
const Question = (props) => {
  return (
    <div className="card">
      <div className="question-date">{props.attributes.publish_date}</div>
      <div className="question-qotd">{props.attributes.qotd}</div>
      <div className="question-stats">Number of Answers: 33</div>
    </div>
  )
}
export default Question