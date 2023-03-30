import React from 'react'

export default class AlgoSign extends React.Component {
  handleClick = () => {

    if (typeof AlgoSigner !== 'undefined') {
      // eslint-disable-next-line no-undef
      AlgoSigner.connect()
      .then(() => {
        alert("ok")
      })
      .catch((e) => {
        console.log(e)
      })
    } else {
      alert("AlgoSigner is not installed, please install AlgoSigner and try again")
    }
  }

  render() {
    return (
      <div>
        <p>Click the following button to see the function in action</p>  
        <button onClick ={this.handleClick}>Display</button>
      </div>
    )
  }
}