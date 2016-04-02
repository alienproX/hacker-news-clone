import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import App from './containers/App'
import Home from './containers/Home/Home'
import Comments from './containers/Comments/Comments'
import Login from './containers/Login/Login'
import Newest from './containers/Newest/Newest'
import Show from './containers/Show/Show'
import Ask from './containers/Ask/Ask'
import Jobs from './containers/Jobs/Jobs'
import User from './containers/User/User'
import SubmitPage from './containers/Submit/Submit'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/newest" component={Newest}/>
    <Route path="/comments" component={Comments}/>
    <Route path="/show" component={Show}/>
    <Route path="/ask" component={Ask}/>
    <Route path="/jobs" component={Jobs}/>
    <Route path="/submit" component={SubmitPage}/>
    <Route path="/login" component={Login}/>
    <Route path="/user/:id" component={User}/>
  </Route>
)

export default routes
