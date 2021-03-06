import React from 'react'

import Countdown from 'influx-simple-countdown'

import logo from '../../../img/react.svg'
import './Home.css'

export default class Home extends React.Component {
  componentDidMount() {
    console.log('this should trigger an eslint warning')
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img alt="logo" className="Home-logo" src={logo} />
          <h2>Welcome to Razzle</h2>
        </div>
        <Countdown />
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    )
  }
}
