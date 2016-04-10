import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news'
import styles from './../Home/Home.css'
import Loader from '../../components/Loader/Loader'
import TimeLine from '../../components/TimeLine/TimeLine'
import { isEmpty } from '../../utils'

class Show extends Component {

  componentDidMount () {
    const {start} = this.props
    if(!start){
      this.props.dispatch(fetchNews(0,'show'))
    }
  }

	render () {
		document.title = 'Show'
		const { showList, dispatch, start, noMoreNews, created} = this.props
		let data = {
			list: showList,
			dispatch: dispatch,
			start: start,
			fetchNews: fetchNews,
			type: 'show',
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
    showList: state.showList.showList,
    start: state.showList.start,
    noMoreNews: state.showList.noMoreNews,
    created: state.showList.created

  }
}

export default connect(mapStateToProps)(Show)
