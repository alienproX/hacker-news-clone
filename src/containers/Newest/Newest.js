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
      this.props.dispatch(fetchNews(0,'newest'))
    }
  }

	render () {
		document.title = 'New Links'
		const { newestList, dispatch, start, noMoreNews, created } = this.props
		let data = {
			list: newestList,
			dispatch: dispatch,
			start: start,
			fetchNews: fetchNews,
			type: 'newest',
			noMoreNews: noMoreNews,
      created: created
		}
		return (
		<TimeLine data = {data} />
		)
	}
}

function mapStateToProps(state) {
  return {
    newestList: state.newestList.newestList,
    start: state.newestList.start,
    noMoreNews: state.newestList.noMoreNews,
    created: state.newestList.created

  }
}

export default connect(mapStateToProps)(Home)
