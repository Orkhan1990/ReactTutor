import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./loginPage.css";

class LoginPage extends Component {
  state = {
    loginEmailValue: "",
    loginPasswordValue: "",
    errMessage: "",
    status: false,
    users: JSON.parse(localStorage.getItem("registerUsers")) || [],
    logedUser: {},
  };

  changeEmailValue = (e) => {
    this.setState({
      loginEmailValue: e.target.value,
    });
  };

  changePasswordValue = (e) => {
    this.setState({
      loginPasswordValue: e.target.value,
    });
  };

  submitLoginForm = (e) => {
    e.preventDefault();
    let getUsers = this.state.users;
    if (
      this.state.loginEmailValue !== "" &&
      this.state.loginPasswordValue !== ""
    ) {
      let registeredUser = getUsers.find(
        (p) => p.email === this.state.loginEmailValue
      );
      if (registeredUser) {
        if (registeredUser.password === this.state.loginPasswordValue) {
          localStorage.setItem("logedUser", JSON.stringify(registeredUser));
          window.location.href = "/home";
        } else {
          this.setState({
            errMessage: "Password wrong!",
          });
        }
      } else {
        this.setState({
          errMessage: "This user not exist!",
        });
      }
    } else {
      this.setState({
        errMessage: "Please fill the all inputs!",
      });
    }
  };
  render() {
    const { loginEmailValue, loginPasswordValue, errMessage } = this.state;
    return (
      <div className="login_page_container">
        <h2>Login</h2>
        <form onSubmit={this.submitLoginForm.bind(this)}>
          <div className="login_input">
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              type="text"
              placeholder="Email"
              value={loginEmailValue}
              onChange={this.changeEmailValue.bind(this)}
            />
          </div>

          <div className="login_input">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              placeholder="Password"
              id="password"
              value={loginPasswordValue}
              onChange={this.changePasswordValue.bind(this)}
            />
          </div>
          <Link className="login_forgot_password">Forgot Password?</Link>
          <p className="loginError">{errMessage}</p>
          <button type="submit" className="login_page_btn">
            Login
          </button>
          <Link to="/signup">
            <button className="forward_sign_up">Sign up</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;
