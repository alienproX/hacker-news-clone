import React from 'react'
import styles from './Loader.css'

function Loader() {
  return (
  	<img className={styles.loading} src="/public/loading.gif" />
  )
}

export default Loader
