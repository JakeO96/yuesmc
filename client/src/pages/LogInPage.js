import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/MainLayout'
import LogInForm from '../components/LogInForm'

export default class LogInPage extends React.Component {
  static propTypes = {
    backend: PropTypes.object,
  }

  render() {
    return (
      <Layout>
        <div className="h-screen">
          <div className="columns-1 w-full mx-auto flex justify-center content-center">
            <div className="w-4/12 mt-32">
              <LogInForm backend={this.props.backend} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}