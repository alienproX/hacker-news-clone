import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news'
import styles from './../Home/Home.css'
import baseSty from '../../styles/base.css'
import Loader from '../../components/Loader/Loader'
import { isEmpty,socialTime,getHost } from '../../utils'
import { Link } from 'react-router'

class Home extends Component {

  componentDidMount () {
    const {start} = this.props
    if(!start){
      this.props.dispatch(fetchNews(0,true))
    }
  }

  render () {
    document.title = 'Hacker News'
    const { newestList, dispatch, start, noMoreNews } = this.props
    console.log('this.props NEWS',this.props)
    let loader = <Loader />
    let list = null
    let moreStatus = false

    document.onscroll = function() {

      if(moreStatus) {
        return
      }
      else{
        moreStatus = (document.body.scrollTop > 0 && document.body.scrollTop >= document.body.offsetHeight - window.innerHeight - 200) ? true : false
        if(moreStatus){
          loader = <Loader />
          dispatch(fetchNews(start,true))
        }
      }
    }

    if(!isEmpty(newestList) ){
      //loader = moreStatus ? <Loader /> : null
      list = (
        newestList.map(function (item,index) {
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
        )
}

return (
  <div className={styles.timeLine}>
  <ul>{list}</ul>
  {noMoreNews ? '':loader}
  <div className={noMoreNews?styles.noMoreNews:''}>{noMoreNews?'No More News :)':''}</div>
</div>
)
}
}

function mapStateToProps(state) {
  return {
    newestList: state.newestList.newestList,
    start: state.newestList.start,
    noMoreNews: state.newestList.noMoreNews

  }
}

export default connect(mapStateToProps)(Home)
