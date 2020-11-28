import React from 'react'
import { Route, Switch } from "react-router-dom"
import Questions from "./Questions/Questions"
import Question from "./Question/Question"

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Questions} />
      <Route exact path="/Questions/:id" component={Question} />
      {/* <Route exact path="/Contacts/:id" component={Contacts} /> */}
    </Switch>)
}

export default App