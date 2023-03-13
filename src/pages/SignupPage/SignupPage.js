import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signUpPage.css";

export default class SignupPage extends Component {
  state = {
    regNameValue: '',
    regEmailValue: '',
    regPasswordValue:'',
    regConfirmPasswordValue:'',
    errMessage:'',
    users:JSON.parse(localStorage.getItem('registerUsers'))||[],
    status:false
  };

  regName = (e) => {
    this.setState({
      regNameValue: e.target.value
    });
  };

  regEmail = (e) => {
    this.setState({
      regEmailValue: e.target.value
    });
  };

  regPassword = (e) => {
    this.setState({
      regPasswordValue: e.target.value
    });
  };

  regConfirmPassword = (e) => {
    this.setState({
      regConfirmPasswordValue: e.target.value
    });
  };

  registerSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.regNameValue !== "" &&
      this.state.regEmailValue !== "" &&
      this.state.regPasswordValue !== "" &&
      this.state.regConfirmPasswordValue !== ""
    ) {
      let existUser = this.state.users.find(
        p => p.email === this.state.regEmailValue
      );
      if (!existUser) {
        if(this.state.regPasswordValue===this.state.regConfirmPasswordValue){
               let newUser={
                id:this.state.users.length+1,
                name:this.state.regNameValue,
                email:this.state.regEmailValue,
                password:this.state.regPasswordValue,
                confirPassword:this.state.regConfirmPasswordValue
               }

               this.state.users.push(newUser);
               localStorage.setItem('registerUsers',JSON.stringify(this.state.users))
               this.setState({
                errMessage:'You register successfuly!',
                status:true
               })
        }else{
          this.setState({
            errMessage:'The passwords not match!',
          })
        }
      }else{
        this.setState({
          errMessage:'This user already exist!'
        })
      }
    } else {
      this.setState({
        errMessage: "Please fill the all inputs!",
      });
    }
  };

  render() {
    const {regNameValue,regEmailValue,regPasswordValue,regConfirmPasswordValue,errMessage,status}= this.state
    return (
      <div className="sign_up_page_container">
        <h2>SIGN UP</h2>
        <form onSubmit={this.registerSubmit.bind(this)}>
          <div className="sign_up_input">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              placeholder="Name"
              id="name"
              value={regNameValue}
              onChange={this.regName.bind(this)}
            />
          </div>

          <div className="sign_up_input">
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              id="email"
              placeholder="Email"
              value={regEmailValue}
              onChange={this.regEmail.bind(this)}
            />
          </div>

          <div className="sign_up_input">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              placeholder="Password"
              id="password"
              value={regPasswordValue}
              onChange={this.regPassword.bind(this)}
            />
          </div>

          <div className="sign_up_input">
            <label htmlFor="confPassword">Re-type Password</label>
            <input
              required
              type="password"
              placeholder="Re-type Password"
              id="confPassword"
              value={regConfirmPasswordValue}
              onChange={this.regConfirmPassword.bind(this)}
            />
          </div>
          <p className={status?'success':'error'}>{errMessage}</p>
          <button type="submit" className="signupPage_button">
            Sign up
          </button>
          <Link to="/login">
            <button type="submit" className="loginPage_button">
              Login
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
