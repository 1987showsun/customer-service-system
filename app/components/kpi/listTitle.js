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
      sortingArray : ['all','increment','decreasing'],
      sorting      : [{
        'team'      : 'all',
        'work'      : 'all',
        'totalWork' : 'all',
        'receive'   : 'all'
      }]
    }
  }

  sorting( name,status){
    let sorting      = this.state.sorting,
        sortingArray = this.state.sortingArray,
        afterStatus  = '';

    sortingArray.filter((el,i,arr)=>{
      if( el==status ){
        if(i < sortingArray.length-1){
          i++;
        }else{
          i=0;
        }
        afterStatus =  arr[i];
      }
    });


    sorting[0][name] = afterStatus;
    this.setState({
      sorting : sorting
    })
  }

  render(){
    return(
      <ul className="list table title kpi" data-item-number="8" data-text-align="center">
        <li>
          <ul>
            <li>客服帳號</li>
            <li>客服人員</li>
            <li>分組<span className={`btn sorting ${this.state.sorting[0]['team']}`} onClick={this.sorting.bind( this,'team',this.state.sorting[0]['team'] )}></span></li>
            <li>工作量排行榜<span className={`btn sorting ${this.state.sorting[0]['work']}`} onClick={this.sorting.bind( this,'work',this.state.sorting[0]['work'] )}></span></li>
            <li>總工作量<span className={`btn sorting ${this.state.sorting[0]['totalWork']}`} onClick={this.sorting.bind( this,'totalWork',this.state.sorting[0]['totalWork'] )}></span></li>
            <li>總領取<span className={`btn sorting ${this.state.sorting[0]['receive']}`} onClick={this.sorting.bind( this,'receive',this.state.sorting[0]['receive'] )}></span></li>
            <li>是否VIP客服</li>
            <li>操作</li>
          </ul>
        </li>
      </ul>
    )
  }
}
