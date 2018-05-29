import React,{ Component }                        from 'react';
import { Provider }                               from 'react-redux';
import { BrowserRouter, Route, Link, HashRouter } from 'react-router-dom';

export default class Tab extends React.Component{
  render(){
    return(
      <section className="mainBlock">
        <ul className="tab">
          <li><div className="option"><Link to="#">領取任務</Link><span className="close"></span></div></li>
          <li><div className="option"><Link to="#">客服列表</Link><span className="close"></span></div></li>
          <li><div className="option"><Link to="#">所有反饋</Link><span className="close"></span></div></li>
          <li><div className="option"><Link to="#">查看統計</Link><span className="close"></span></div></li>
          <li><div className="option"><Link to="#">查看 KPI</Link><span className="close"></span></div></li>
          <li><div className="option"><Link to="#">客服審查</Link><span className="close"></span></div></li>
        </ul>
      </section>
    );
  }
}
