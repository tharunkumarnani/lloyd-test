import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    userNameInput: '',
    userPasswordInput: '',
    isError: false,
    errorMsg: '',
  }

  onChangeUserInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({userPasswordInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    // check the user-credentials are valid or not
    // if user credentials are invalid put it into the errorMsg and isError change to true
  }

  render() {
    const {userNameInput, userPasswordInput, isError, errorMsg} = this.state
    return (
      <div className="login-home">
        <form className="user-form" onSubmit={this.onSubmitForm}>
          <h1 className="login-heading">Company Name</h1>
          <label htmlFor="userInput" className="label-style" />
          <input
            value={userNameInput}
            className="input-style"
            type="text"
            onChange={this.onChangeUserInput}
            placeholder="Enter Username"
          />
          <label htmlFor="userPassword" className="label-style" />
          <input
            value={userPasswordInput}
            className="input-style"
            type="password"
            onChange={this.onChangePasswordInput}
            placeholder="Enter Password"
          />
          <button className="sub-btn" type="submit">
            Submit
          </button>
          {isError && <p className="err-msg">* {errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
