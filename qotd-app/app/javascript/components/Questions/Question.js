import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const Header = styled.div`
  // background-color: black;
  // width: 100%;
`
const QOTD = styled.div``
const QStats = styled.div``

const Question = (props) => {
  return (
    <Card>
      <Card.Body>
        <div className="question-qotd">{props.attributes.qotd}</div>
      </Card.Body>
      <Card.Footer>
        <Button variant="dark" size="sm" className="question-stats">
          Reponses <Badge variant="light">33</Badge>
        </Button>
      </Card.Footer >
    </Card >
  )
}
export default Question