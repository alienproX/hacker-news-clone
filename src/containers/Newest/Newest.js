import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news'
import styles from './../Home/Home.css'
import Loader from '../../components/Loader/Loader'
import TimeLine from '../../components/TimeLine/TimeLine'
import { isEmpty } from '../../utils'

class Home extends Component {

  componentDidMount () {
    const {start} = this.props
    if(!start){
      this.props.dispatch(fetchNews(0,true))
    }
  }

  render () {
    document.title = 'New Links'
    const { newestList, dispatch, start, noMoreNews } = this.props
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
			list = <TimeLine data = {newestList} />
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
    newestList: state.newestList.newestList,
    start: state.newestList.start,
    noMoreNews: state.newestList.noMoreNews

  }
}

export default connect(mapStateToProps)(Home)
