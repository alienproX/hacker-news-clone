import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Comments.css'

class Comments extends Component {
  render () {
    document.title = 'New Comments'
    return (
      <div className={styles.comments}>
      Comments Page
      </div>
    )
  }
}

export default Comments
