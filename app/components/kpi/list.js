import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

//Component
import Item                                           from './item';

export default class List extends React.Component{
  render(){
    return(
      <ul className="list table content kpi" data-item-number="8" data-text-align="center">
        {
          this.props.data.map((item,i)=>{
            return(<Item key={i} item={item}/>)
          })
        }
      </ul>
    );
  }
}
