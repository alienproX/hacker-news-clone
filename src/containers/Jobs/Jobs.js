import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news'
import styles from './../Home/Home.css'
import Loader from '../../components/Loader/Loader'
import TimeLine from '../../components/TimeLine/TimeLine'
import { isEmpty } from '../../utils'

class Jobs extends Component {

	componentDidMount () {
		const {start} = this.props
		if(!start){
			this.props.dispatch(fetchNews(0,'jobs'))
		}
	}

	render () {
		document.title = 'Jobs'
		const { jobsList, dispatch, start, noMoreNews } = this.props
		let data = {
			list: jobsList,
			dispatch: dispatch,
			start: start,
			fetchNews: fetchNews,
			type: 'jobs',
			noMoreNews: noMoreNews
		}
		return (
			<TimeLine data = {data} />
		)
	}
}

function mapStateToProps(state) {
	return {
		jobsList: state.jobsList.jobsList,
		start: state.jobsList.start,
		noMoreNews: state.jobsList.noMoreNews

	}
}

export default connect(mapStateToProps)(Jobs)
