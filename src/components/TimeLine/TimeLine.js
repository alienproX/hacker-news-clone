import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './TimeLine.css'
import baseSty from '../../styles/base.css'
import {socialTime, getHost } from '../../utils'
import { Link } from 'react-router'

class TimeLine extends Component {
  render () {
    return (
      <ul  className={styles.timeLine}>
      {
        this.props.data.map(function (item,index) {
          return (
            <li key={item.id}>
            <i>{index+1}</i>
            <button>{item.score} <br/>{item.score > 1 ? 'points':'point'}</button>
            <div className={styles.content}>
            <h3><a href={item.url} target="_blank">{item.title}</a></h3>
            <cite><a href={item.url} target="_blank">{getHost(item.url)}</a> <time>-- {socialTime(item.time)}</time></cite>
            <div className={styles.actionArea}>
            <a href={`https://hn.algolia.com/?query=${item.title}`} target="_blank"><span className={baseSty.iconClock}></span>past</a>
            <a href={`https://www.google.com/search?q=${item.title}`} target="_blank"><span className={baseSty.iconLink}></span>web</a>
            <a href="#"><span className={baseSty.iconBubble}></span>discuss</a>
            <Link to={`/user/${item.by}`} className={styles.user}>@{item.by}</Link>
            </div>
            </div>
            </li>
            )
        })
      }
      </ul>
      )
}
}

export default TimeLine
