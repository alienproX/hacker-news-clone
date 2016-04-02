import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news'
import styles from './Home.css'
import Loader from '../../components/Loader/Loader'
import TimeLine from '../../components/TimeLine/TimeLine'
import { isEmpty } from '../../utils'

class Home extends Component {

  componentDidMount () {
    const {start} = this.props
    if(!start){
      this.props.dispatch(fetchNews())
    }
  }

  render () {
    document.title = 'Hacker News'
    const { newsList, dispatch, start, noMoreNews } = this.props
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
          dispatch(fetchNews(start))
        }
      }
    }

    if(!isEmpty(newsList) ){
      list = <TimeLine data = {newsList} />
    }

    return (
      <div className={styles.home}>
      {list}
      {noMoreNews ? '':loader}
      <div className={noMoreNews?styles.noMoreNews:''}>{noMoreNews?'No More News :)':''}</div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    newsList: state.newsList.newsList,
    start: state.newsList.start,
    noMoreNews: state.newsList.noMoreNews

  }
}

export default connect(mapStateToProps)(Home)
