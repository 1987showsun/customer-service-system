import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

//Components

//Actions

export default class List extends React.Component{

  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <ul className="list table title" data-item-number="5" data-text-align="center">
        <li>
          <ul>
            <li>用戶</li>
            <li>時間</li>
            <li>留言</li>
            <li>回覆</li>
            <li>回覆內容</li>
          </ul>
        </li>
      </ul>
    )
  }
}
