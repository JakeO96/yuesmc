import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
  static propTypes = {
    buttonContent: PropTypes.object,
    buttonStyles: PropTypes.string,
    menu: PropTypes.element
  }

  state = {
    showMenu: false,
  }

  switchMenu = () => {
    const show = !this.state.showMenu
    this.setState({ showMenu: show })
  }

  render() {
    return (
    <>
      <button onClick={this.switchMenu} type="button" className={this.props.buttonStyles} aria-expanded="false">
        {this.props.buttonContent}
      </button>
      {
        this.state.showMenu ?
          (this.props.menu)
        :
          (null)
      }
    </>
    )
  }
}