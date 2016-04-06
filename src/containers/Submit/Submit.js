import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Submit.css'
import { Link } from 'react-router'

class SubmitPage extends Component {
	render () {
		document.title = 'Submit'
		return (
			<div className={styles.submit}>
				<h3>
					You have to be logged in to Hacker News. :)
				</h3>
				<a href="https://news.ycombinator.com/submit">https://news.ycombinator.com/submit</a>				
			</div>
		)
}
}

export default SubmitPage
