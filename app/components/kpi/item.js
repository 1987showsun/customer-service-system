import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

export default class Item extends React.Component{
  render(){
    return(
      <li>
        <ul>
          <li>{ this.props.item.username }</li>
          <li>{ this.props.item.name }</li>
          <li>{ this.props.item.team }</li>
          <li>{ this.props.item.ranking }</li>
          <li>{ this.props.item.Workload }</li>
          <li>{ this.props.item.WorkTotal }</li>
          <li>{ (this.props.item.VIPService==true)? "是":"否" }</li>
          <li><button className="btn remove" onClick="">刪除 KPI</button></li>
        </ul>
      </li>
    );
  }
}
