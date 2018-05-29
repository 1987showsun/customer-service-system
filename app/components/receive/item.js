import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

export default class Item extends React.Component{
  render(){
    return(
      <li>
        <ul>
          <li><Link to="">{this.props.item['user']}</Link><span className="level">VIP {this.props.item['level']}</span></li>
          <li>{this.props.item['replyDate']}</li>
          <li dangerouslySetInnerHTML={{__html:this.props.item['message']}}></li>
          <li><span className="btn popup">回覆</span></li>
          <li dangerouslySetInnerHTML={{__html:this.props.item['messageReply']}}></li>
        </ul>
      </li>
    );
  }
}
