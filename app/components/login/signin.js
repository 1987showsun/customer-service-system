import React,{Component} from 'react';
import { connect }       from 'react-redux';
import { Link,Route }    from 'react-router-dom';

export default class Signin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formObject : [{
        "username" : "",
        "password" : ""
      }]
    }
  }

  handleChange(e){
    let name        = e.target.name,
        val         = e.target.value,
        formObject  = this.state.formObject;

    formObject[0][name] = val;
    this.setState({
      formObject : formObject,
    })
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <section className="login">
        <form className="" onSubmit={this.handleSubmit.bind(this)} >
          <div className="logo">
            <img src="/public/images/share/logo.png" alt="Skyline" title="Skyline"/>
          </div>
          <ul>
            <li>
              <div className="inputOutLine">
                <input type="text" name="username" value={this.state.formObject[0]['username']} placeholder="請輸入帳號" onChange={this.handleChange.bind(this)} className="input"/>
              </div>
              <div className="inputOutLine">
                <input type="password" name="password" value={this.state.formObject[0]['password']} placeholder="請輸入密碼" onChange={this.handleChange.bind(this)} className="input"/>
              </div>
            </li>
            <li>

            </li>
            <li>
              <button type="submit" className="btn submit">登入</button>
            </li>
          </ul>
        </form>
      </section>
    );
  }
}
