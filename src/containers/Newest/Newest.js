import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Newest.css'

class Newest extends Component {
	render () {
		document.title = 'New Links'
		return (
			<div className={styles.news}>
			Newest Page
			</div>
			)
	}
}

export default Newest
