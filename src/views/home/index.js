import React from 'react'
import { Route, Link } from 'react-router-dom'
import Index from './Index/index.js'
import Find from './Find/index.js'
import Consult from './Consult/index.js'
import My from './My/index.js'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/home/index">首页</Link>
        <Link to="/home/find">找房</Link>
        <Link to="/home/consult">咨询</Link>
        <Link to="/home/my">我的</Link>
        <Route path="/home/index" component={Index}>首页</Route>
        <Route path="/home/find" component={Find}>找房</Route>
        <Route path="/home/consult" component={Consult}>咨询</Route>
        <Route path="/home/my" component={My}>我的</Route>
      </div>
    )
  }
}
export default Home
