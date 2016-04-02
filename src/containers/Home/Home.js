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
		let data = {
			list: newsList,
			dispatch: dispatch,
			start: start,
			fetchNews: fetchNews,
			newest: false,
			noMoreNews: noMoreNews
		}
    return (
    <TimeLine data = {data} />
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
