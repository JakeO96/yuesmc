import React from 'react'
import PropTypes from 'prop-types'

export default class FormField extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.string.isRequired,
    backend: PropTypes.object,
    required: PropTypes.bool
  }

  state = {
    value: this.props.value,
    error: false
  }

  static getDerivedStateFromProps(nextProps) {
    return {value: nextProps.value}
  }

  onChange = evt => {
    const name = this.props.name
    const value = evt.target.value
    const error = this.props.validate(value)

    this.setState({value, error})

    this.props.onChange({name, value, error})
  }

  onBlur = evt => {
    const value = evt.target.value
    const name = evt.target.name
    let error = this.props.validate(value)

    if (value.length === 0 || this.props.backend.noNeed){
      evt.target.placeholder = this.props.placeholder
    } else {
      if ((!this.props.backend.noNeed) && (name === 'email')) {
        this.props.backend.doesEmailExist({email: value})
        .then(res => res.json())
        .then((res) => {
          if (res.err.length) {
            error = res.err
            this.setState({value, error})
            this.props.onChange({name, value, error})
          } else {
            error = false
            this.setState({value, error})
            this.props.onChange({name, value, error})

          }
        })
      } else if ((!this.props.backend.noNeed) && (name === 'username')) {
        this.props.backend.doesUsernameExist({username: value})
        .then(res => res.json())
        .then((res) => {
          if (res.err.length) {
            error = res.err
            this.setState({value, error})
            this.props.onChange({name, value, error})
          } else {
            error = false
            this.setState({value, error})
            this.props.onChange({name, value, error})
          }
        })
      } else if ((!this.props.backend.noNeed) && (name === 'displayName')) {
        this.props.backend.doesDisplayNameExist({displayName: value})
        .then(res => res.json())
        .then((res) => {
          if (res.err.length) {
            error = res.err
            this.setState({value, error})
            this.props.onChange({name, value, error})
          } else {
            error = false
            this.setState({value, error})
            this.props.onChange({name, value, error})
          }
        })
      }
    }
  }

  render() { 
    if (this.props.required) {
      return (
        <div className="w-full">
          <span className="text-noct-orange">{this.state.error}</span>
          <div className="flex">
            <input
              type={this.props.type}
              name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.onChange}
              className={this.props.styles}
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={this.onBlur}
            />
            <span className='text-noct-orange text-2xl pl-1'>*</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="w-full">
          <span className="text-noct-orange">{this.state.error}</span>
          <div className="flex">
            <input
              type={this.props.type}
              name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.onChange}
              className={this.props.styles}
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={this.onBlur}
            />
            <div className='ml-2 pl-1'></div>
          </div>
        </div>
      )
    }
  }
}