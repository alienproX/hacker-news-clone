import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Submit.css'
import { Link } from 'react-router'

class SubmitPage extends Component {
  render () {
    document.title = 'Submit'
    return (
      <div className={styles.submit}>
      <h3>You have to be logged in to submit. :)</h3>
      <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default SubmitPage
