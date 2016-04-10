import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user'
import Loader from '../../components/Loader/Loader'
import styles from './User.css'
import { isEmpty, socialTime } from '../../utils'
import { Link } from 'react-router'

class User extends Component {
  componentDidMount () {
    this.props.dispatch(fetchUser(this.props.params.id))
  }
  render () {
    document.title = `Profile: ${this.props.params.id}`

    const { user , created} = this.props

    if(isEmpty(user) || window.createdTime == created ){
      return <Loader />
    }
    else{
			window.createdTime = created

      return (
        <div className={styles.user}>
        <ul>
        <li><span>user</span><div>{user.id}</div></li>
        <li><span>created</span><div title={socialTime(user.created, true)}>{socialTime(user.created)}</div></li>
        <li><span>karma</span><div>{user.karma}</div></li>
        {user.about ? <li><span>about</span><div  dangerouslySetInnerHTML={{__html:user.about}}></div></li>:''}
        </ul>

        </div>
        )
    }

  }
}

function mapStateToProps(state) {
  return {
    user: state.getUser.user,
		created: state.getUser.created
  }
}

export default connect(mapStateToProps)(User)
