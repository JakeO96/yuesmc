export default class ServerAPI {
  createUser = async data => {
    const response = await fetch('/auth/register', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return this.checkStatus(response)
  }

  logUserIn = async data => {
    const response = await fetch('/auth/login', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    return this.checkStatus(response)
  }

  doesEmailExist = async data => {
    const response = await fetch('/auth/email-exists', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    return this.checkStatus(response)
  }

  doesUsernameExist = async data => {
    const response = await fetch('/auth/username-exists', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    return this.checkStatus(response)
  }

  doesDisplayNameExist = async data => {
    const response = await fetch('/auth/displayName-exists', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    return this.checkStatus(response)
  }

  checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`)
      error.status = response.statusText
      error.response = response
      console.log(error)
      throw error
    }
  }
}