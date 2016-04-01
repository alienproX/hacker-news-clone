import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Ask.css'

class Ask extends Component {
  render () {
    document.title = 'Ask'
    return (
      <div className={styles.ask}>
      Ask Page
      </div>
    )
  }
}

export default Ask
