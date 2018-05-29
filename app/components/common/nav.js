import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

export default class Nav extends React.Component{
  render(){
    return (
      <nav>
        <div className="navBlock">
          <span className="title">MENU</span>
          <ul className="menu" data-icon="true">
            <li><Link to="/css/list/receive"><span className="icon"></span>領取任務</Link></li>
            <li><Link to="/css/list/service"><span className="icon"></span>客服列表</Link></li>
            <li><Link to="/css/list/feedback"><span className="icon"></span>所有反饋</Link></li>
            <li><Link to="/css/list/kpi"><span className="icon"></span>查看 KPI</Link></li>
            <li><Link to="/css/list/review"><span className="icon"></span>客服審查</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
