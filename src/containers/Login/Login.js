import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Login.css'


class Login extends Component {
	render () {
		document.title = 'Login'
		return (
			<div className={styles.login}>
					<h3>
						Log in Hacker News. :)
					</h3>
					<a href="https://news.ycombinator.com/login">https://news.ycombinator.com/login</a>
				</div>
			)
	}
}

export default Login
