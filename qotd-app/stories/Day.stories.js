import React from 'react';
import Day from '../app/javascript/components/Questions/Day.js'
import Question from '../app/javascript/components/Questions/Question.js'
import { Button } from './Button'

export default {
  title: 'Example/Day',
  component: Day
};

const Template = (args) => <Day {...args} />;
const date = "2020-12-05T00:00:00.000"

export const BlankDay = Template.bind({});
BlankDay.args = {
  publish_date: date,
}

export const DayWithButton = Template.bind({});
DayWithButton.args = {
  content: <Button label="hi" />,
  publish_date: date
}
export const DayWithQuestion = Template.bind({});
const questionArgs = {
  qotd: "How does StoryBook look on me?",
  publish_date: date
}

DayWithQuestion.args = {
  content: <Question key={questionArgs.publish_date} attributes={questionArgs} />,
  publish_date: questionArgs.publish_date
}
