import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types';

const Day = ({ content, publish_date }) => {
  return (
    <ListGroup.Item variant={isWeekend(publish_date) ? 'info' : ''}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{new Intl.DateTimeFormat("en-US", {
          weekday: "long"
        }).format(new Date(publish_date))}</h5>
        <small>{new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "numeric",
          day: "2-digit"
        }).format(new Date(publish_date))}</small>
      </div>
      <hr></hr>
      {content}
    </ListGroup.Item>
  );
}

const isWeekend = (datatime) => {
  const dayOfTheWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long"
  }).format(new Date(datatime))
  console.log(dayOfTheWeek)
  return (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday")
}
export default Day

Day.propTypes = {
  content: PropTypes.element,
  publish_date: PropTypes.string.isRequired
};


