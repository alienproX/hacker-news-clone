import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Login.css'


class Login extends Component {
  render () {
    document.title = 'Ask'
    return (
      <div className={styles.login}>
        <ul>
          <h3>Login</h3>
          <li><span>username:	</span><div><input type="text" /></div></li>
          <li><span>password:	</span><div><input type="text" /></div></li>
          <button>login</button>
          <a href="#">Forgot your password?</a>
        </ul>
        <ul>
          <a href="#">Create Account</a>
          </ul>
      </div>
    )
  }
}

export default Login
