import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Jobs.css'

class Jobs extends Component {
	render () {
		document.title = 'Jobs'
		return (
			<div className={styles.jobs}>
			Jobs Page
			</div>
			)
	}
}

export default Jobs
