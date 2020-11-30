import React, { useState, useEffect, Fragment } from 'react'
import Question from '../Questions/Question'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components'
import axios from 'axios'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Day from '../Questions/Day'
const Home = styled.div`
  text-align: center;
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

  const questionCards = questions.map(question => {
    const q = <Question key={question.attributes.publish_date} attributes={question.attributes} qotd={question.attributes.qotd} />
    return (
      <Day key={question.attributes.publish_date} content={q} publish_date={question.attributes.publish_date} />
    )
  })

  const daysList = null

  return (
    <Fragment>
      <Header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>QOTD</Navbar.Brand>
        </Navbar>
      </Header>
      <Container fluid>
        <Row>
          <Col className="questionsPlanner" >
            <div className="calendar">
              <div>Select a Day</div>
              <Calendar
                onChange={onChange}
                width="100%"
                value={value}
              />
              <p>
                20 Respondets to your question yesterday! Check it out.
              </p>
            </div>
          </Col>
          <Col className="questionPanel">
            <ListGroup className="week">
              {questionCards}
            </ListGroup>
          </Col>
          <Col className="AnswersPanel">
            <div className="answers">
              <div>Responses</div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Questions