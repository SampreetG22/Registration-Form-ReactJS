import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    loginSuccessful: false,
    classNameF: 'normal',
    classNameL: 'normal',
  }

  onChangefirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangelastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurfirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true, classNameF: 'highlighted'})
    } else {
      this.setState({firstNameError: false, classNameF: 'normal'})
    }
  }

  onBlurlastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: true, classNameL: 'highlighted'})
    } else {
      this.setState({lastNameError: false, classNameL: 'normal'})
    }
  }

  renderFirstName = () => {
    const {firstName, firstNameError, classNameF} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          id="firstName"
          className={classNameF}
          value={firstName}
          onChange={this.onChangefirstName}
          onBlur={this.onBlurfirstName}
          placeholder="First Name"
        />
        {firstNameError && <p className="errorLabel">Required</p>}
      </>
    )
  }

  renderLastName = () => {
    const {lastName, lastNameError, classNameL} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          id="lastName"
          className={classNameL}
          value={lastName}
          onChange={this.onChangelastName}
          onBlur={this.onBlurlastName}
          placeholder="Last Name"
        />
        {lastNameError && <p className="errorLabel">Required</p>}
      </>
    )
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.onBlurfirstName()
      this.onBlurlastName()
    } else if (firstName === '' || lastName === '') {
      if (firstName === '') {
        this.onBlurfirstName()
      }
      if (lastName === '') {
        this.onBlurlastName()
      }
    } else {
      this.setState({loginSuccessful: true})
    }
  }

  submitAnotherResponseForm = event => {
    event.preventDefault()
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: false,
      lastNameError: false,
      loginSuccessful: false,
    })
  }

  render() {
    const {loginSuccessful} = this.state
    return (
      <div className="mainContainer">
        <h1 style={{color: 'orange'}} className="mainHeading">
          Registration
        </h1>
        {!loginSuccessful && (
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderFirstName()}</div>
            <div className="input-container">{this.renderLastName()}</div>
            <button
              type="submit"
              className="login-button"
              onClick={this.submitForm}
            >
              Login
            </button>
          </form>
        )}
        {loginSuccessful && (
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="tickMark"
              alt="success"
            />
            <p className="successText">Submitted Successfully</p>
            <button
              type="submit"
              className="login-button"
              onClick={this.submitAnotherResponseForm}
            >
              Submit Another Response
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
