import React from 'react'
import PropTypes from 'prop-types'
import { Link, Navigate } from 'react-router-dom'

import FormField from './FormField'

export default class LogInForm extends React.Component {
  static propTypes = {
    backend: PropTypes.object,
  }

  state = {
    fields: {
        email: '',
        password: '',
      },
      fieldErrors: {},
      serverError: '',
      _loading: false,
      _saveStatus: 'READY'
  }

  missingRequiredFields = () => {
    const user = this.state.fields
    const fieldErrors = this.state.fieldErrors
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k])

    if (!user.email) return true
    if (!user.password) return true
    if (errMessages.length) return true

    return false
  }

  onInputChange = ({name, value, error}) => {
    const fields = Object.assign({}, this.state.fields)
    const fieldErrors = Object.assign({}, this.state.fieldErrors)

    fields[name] = value
    fieldErrors[name] = error

    this.setState({fields, fieldErrors})
  }

  onFormSubmit = evt => {
    const user = this.state.fields
    evt.preventDefault()

    if (this.missingRequiredFields()) return;

    this.setState({ _saveStatus: 'SAVING' })

    this.props.backend.logUserIn(user)
    .then(res => res.json())
    .then((data) => {
      if (data.err){
        this.setState({flaskError: data.err, _saveStatus: 'READY'})
      }else {
        this.setState({_saveStatus: 'SUCCESS'})
      }
    })   
    .catch((err) => {
      console.error(err)
      this.setState({_saveStatus: 'ERROR'})
    })
  }

  buildFields = () => {
    return (
      // eslint-disable-next-line no-array-constructor
      new Array(
        {
          type: "text",
          name: "email",
          placeholder: "E-mail address",
          styles: "input[type='email']",
          onChange: this.onInputChange,
          value: this.state.fields.email,
        },
        {
          type: "password",
          name: "password",
          placeholder: "Password",
          styles: "input[type='password']",
          onChange: this.onInputChange,
          value: this.state.fields.password,
      }
      ).map((attrs) => (
        <div key={attrs.name} className="p-1 flex justify-center w-full col-full border-0 px-0">
          <FormField 
            type={attrs.type} 
            name={attrs.name} 
            placeholder={attrs.placeholder} 
            styles={attrs.styles.concat(' w-full')}
            onChange={attrs.onChange }
            value={attrs.value}
            validate={attrs.validate ? attrs.validate : () => false}
            backend={attrs.backend ? attrs.backend : {noNeed: true}}
          />
        </div>
      ))
    )
  }

  buildValidatedButton = (text) => {
    return (
      <div className="w-full flex justify-center">
        <button type='submit' className="whitespace-nowrap inline-flex items-center justify-center font-semibold ease-in duration-200 rounded-full outline outline-noct-blue text-noct-blue bg-inherit w-6/12 my-3 hover:bg-noct-blue hover:text-noct-white hover:outline-none">
          <p className="py-2">
            {text}
          </p>
        </button>
      </div> 
    )
  }

  render (){
    return (
      <>
      <h2 className="font-bold text-noct-white text-3xl mb-6">
        Log In
      </h2>
      <form onSubmit={this.onFormSubmit} >
      { this.state.fields.FLASK_VALIDATION_ERROR !== '' ? <span className="text-noct-orange">{this.state.flaskError}</span> : null}
      { this.buildFields()  }
      {
        this.missingRequiredFields() ?
          <div className="w-full flex justify-center">
            <button type='submit' className="whitespace-nowrap inline-flex items-center justify-center font-bold ease-in duration-200 rounded-full text-noct-white bg-noct-black w-6/12 my-3">
              <p className="py-2 text-noct-orange">
                Fill in the fields
              </p>
            </button>
          </div>
        :
        {
          SAVING: this.buildValidatedButton('Saving ...'),
          SUCCESS: <Navigate to='/dashboard' />,
          ERROR: this.buildValidatedButton('Save Failed - Retry?'),
          READY: (this.buildValidatedButton('Log In')),
        }[this.state._saveStatus]
      }
      </form>
      <div className="pt-1 text-noct-white">
        New to us?
        <Link to='/create-account' className='transition-all ml-3  underline text-noct-teal hover:no-underline hover:text-noct-gray'>
          Create an Account
        </Link>
      </div>
      </>
    )
  }
}