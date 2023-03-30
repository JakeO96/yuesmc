import React from 'react'
//import PropTypes from 'prop-types'

import Layout from '../components/MainLayout'

export default class UserDashBoardPage  extends React.Component {
  /** 
  static propTypes = {
    backend: PropTypes.object,
    username: PropTypes.string,
  }

  state = {
    userInfo: {}
  }

  useEffect = () => {
    this.props.backend(this.props.username)
  }
*/
  render() {
    return (
      <Layout>
        <div>
          <div>
            <h1> Dashboard </h1>
          </div>
        </div>
      </Layout>
    )
  }
}