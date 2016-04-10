import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news'
import styles from './../Home/Home.css'
import Loader from '../../components/Loader/Loader'
import TimeLine from '../../components/TimeLine/TimeLine'
import { isEmpty } from '../../utils'

class Ask extends Component {

  componentDidMount () {
    const {start} = this.props
    if(!start){
      this.props.dispatch(fetchNews(0,'ask'))
    }
  }

	render () {
		document.title = 'Ask'
		const { askList, dispatch, start, noMoreNews, created } = this.props
		let data = {
			list: askList,
			dispatch: dispatch,
			start: start,
			fetchNews: fetchNews,
			type: 'ask',
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
    askList: state.askList.askList,
    start: state.askList.start,
    noMoreNews: state.askList.noMoreNews,
    created: state.askList.created

  }
}

export default connect(mapStateToProps)(Ask)
