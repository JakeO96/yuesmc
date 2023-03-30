import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/MainLayout'
import CreateAccountForm from '../components/CreateAccountForm'

export default class CreateAccountPage extends React.Component {
  static propTypes = {
    backend: PropTypes.object
  }

  render (){
    return(
      <Layout>
        <div className="columns-1 w-full mx-auto flex justify-center content-center">
          <div className="w-4/12 mt-32">
            <CreateAccountForm backend={this.props.backend} />
          </div>
        </div>
      </Layout>
    )
  }
}