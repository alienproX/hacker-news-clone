import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchComment } from '../../actions/comment'
import Loader from '../../components/Loader/Loader'
import timeLine from '../../components/TimeLine/TimeLine.css'
import styles from './Comment.css'
import baseSty from '../../styles/base.css'
import {isEmpty, socialTime, getHost } from '../../utils'
import { Link } from 'react-router'


function CommentList(array){
  if(!array) return
    return (
      <ul>
      {
        array.map(function(item){
          if(item.deleted) return
          return(
            <li>
            <div className={styles.commentContent}>
              <span className={styles.commentMeta}>
                <Link to={`/user/${item.by}`}>@{item.by}</Link> -- <span title={socialTime(item.time, true)}>{socialTime(item.time)}</span>
              </span>
              <span dangerouslySetInnerHTML={{__html:item.text}}></span>
            </div>
            {
              item.kids && CommentList(item.kids)
            }
            </li>
            )
        })
      }
      </ul>
      )
}

class Comment extends Component {
  componentDidMount () {
    this.props.dispatch(fetchComment(this.props.params.id))
  }
  render () {
    document.title = `Loading...`

    const { comments , created} = this.props

    if(isEmpty(comments) || window.createdComment == created ){
      return <Loader />
    }
    else{
      window.createdComment = created
      let commentCount = comments.descendants > 0 ? `${comments.descendants+(comments.descendants == 1 ? ` comment`:` comments`)}`: `no comment yet`
      document.title = `Comments: ${comments.title}`
      comments.url = comments.url ? comments.url : `https://news.ycombinator.com/item?id=${comments.id}`
      return (
        <div className={styles.comment}>
          <ul className={`${timeLine.timeLine} ${styles.hoverNone}`}>
        <li>
        <button>{comments.score} <br/>{comments.score > 1 ? 'points':'point'}</button>
        <div className={`${timeLine.content} ${styles.titleContent}`}>
        <h3><a href={comments.url} target="_blank">{comments.title}</a></h3>
        <cite><a href={comments.url} target="_blank">{getHost(comments.url)}</a> <time title={socialTime(comments.time, true)}>-- {socialTime(comments.time)}</time></cite>
        <div className={timeLine.actionArea}>
          <a href={`https://hn.algolia.com/?query=${comments.title}`} target="_blank"><span className={baseSty.iconClock}></span>past</a>
          <a href={`https://www.google.com/search?q=${comments.title}`} target="_blank"><span className={baseSty.iconLink}></span>web</a>
          <Link to={`/user/${comments.by}`} className={styles.user}>@{comments.by}</Link>
          </div>
          </div>
        </li>
      </ul>
          <div className={styles.commentList}>
            <h4>{commentCount}</h4>
          {
            CommentList(comments.kids)
          }
          </div>
          </div>
          )
}

}
}

function mapStateToProps(state) {
  return {
    comments: state.getComment.comments,
    created: state.getComment.created
  }
}

export default connect(mapStateToProps)(Comment)
