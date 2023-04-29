import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    fName: '',
    lName: '',
    fNameError: false,
    lNameError: false,
    loginSuccessful: false,
    classNameF: 'normal',
    classNameL: 'normal',
  }

  onChangeFName = event => {
    this.setState({fName: event.target.value})
  }

  onChangeLName = event => {
    this.setState({lName: event.target.value})
  }

  onBlurFName = () => {
    const {fName} = this.state
    if (fName === '') {
      this.setState({fNameError: true, classNameF: 'highlighted'})
    } else {
      this.setState({fNameError: false, classNameF: 'normal'})
    }
  }

  onBlurLName = () => {
    const {lName} = this.state
    if (lName === '') {
      this.setState({lNameError: true, classNameL: 'highlighted'})
    } else {
      this.setState({lNameError: false, classNameL: 'normal'})
    }
  }

  renderFirstName = () => {
    const {fName, fNameError, classNameF} = this.state
    return (
      <>
        <label className="input-label" htmlFor="fname">
          FIRST NAME
        </label>
        <input
          className={classNameF}
          value={fName}
          onChange={this.onChangeFName}
          onBlur={this.onBlurFName}
          placeholder="First Name"
        />
        {fNameError && <p className="errorLabel">Required</p>}
      </>
    )
  }

  renderLastName = () => {
    const {lName, lNameError, classNameL} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lname">
          LAST NAME
        </label>
        <input
          className={classNameL}
          value={lName}
          onChange={this.onChangeLName}
          onBlur={this.onBlurLName}
          placeholder="Last Name"
        />
        {lNameError && <p className="errorLabel">Required</p>}
      </>
    )
  }

  submitForm = event => {
    event.preventDefault()
    const {fName, lName} = this.state
    if (fName === '' && lName === '') {
      this.onBlurFName()
      this.onBlurLName()
    } else if (fName === '' || lName === '') {
      if (fName === '') {
        this.onBlurFName()
      }
      if (lName === '') {
        this.onBlurLName()
      }
    } else {
      this.setState({loginSuccessful: true})
    }
  }

  submitAnotherResponseForm = event => {
    event.preventDefault()
    this.setState({
      fName: '',
      lName: '',
      fNameError: false,
      lNameError: false,
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
