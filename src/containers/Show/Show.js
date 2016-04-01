import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Show.css'

class Show extends Component {
  render () {
    document.title = 'Show'
    return (
      <div className={styles.show}>
      Show Page
      </div>
    )
  }
}

export default Show
