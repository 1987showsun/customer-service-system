import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { BrowserRouter, Route, Link, HashRouter }     from 'react-router-dom';

export default class Header extends React.Component{

  constructor(props){
    super(props);
    this.state={
      memberSelectSwitchStatus : false,
    }
  }

  memberSelectSwitch(){
    let memberSelectSwitchStatus = this.state.memberSelectSwitchStatus;
    if( memberSelectSwitchStatus ){
      memberSelectSwitchStatus = false;
    }else{
      memberSelectSwitchStatus = true;
    }
    this.setState({
      memberSelectSwitchStatus : memberSelectSwitchStatus
    })
  }

  render(){
    return (
      <header>

        <div className="mobileNavSwitch"><span></span></div>
        <div className="left">
          <div className="logo">
            <img src="./public/images/share/logo.png" alt="" title="" />
          </div>
        </div>

        <div className="right">
          <div className="member">
            <span className="profilePic" onClick={this.memberSelectSwitch.bind(this)}>
              <img src="" alt="" title=""/>
            </span>
            <div className={`selectBlock ${this.state.memberSelectSwitchStatus}`}>
              <div className="memberName"> TW0000001 </div>
              <ul className="select">
                <li><a href="#" className="memberOption"><span className="icon signOut"></span>登出</a></li>
                <li><span className="memberOption" onClick=""><span className="icon offWork"></span>下班</span></li>
              </ul>
            </div>
          </div>
        </div>

      </header>
    );
  }
}
