import React from 'react'
import { Navigate, Link } from 'react-router-dom'

export default class NewAccountRedirectToLogin extends React.Component {
  state = {
    counter: 20,
  }

  componentDidMount() {
    this.interval = setInterval(() => (
      this.setState(prevState => {
        return {
          counter: prevState.counter - 1,
        }
      }
    )), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render(){
    return(
      <>
        <div className="center">
          <h3>Your account was successfully created</h3>
          <h3>We have sent you an email, please click on the link in the email to activate your account.</h3>
        </div>
        <div>
          <p>You will be redirected to the log in page in {this.state.counter} ...</p>
          <p> Or <Link to="/login">go to the log in page now</Link></p>
        </div>
        
        { (this.state.counter < 1) ? (
            <Navigate to="/login" />
           ) : null }
      </>
    )
  }
}