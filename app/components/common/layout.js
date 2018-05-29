import React,{ Component }                            from 'react';
import { connect }                                    from 'react-redux';
import { BrowserRouter, Route, Link, HashRouter }     from 'react-router-dom';
import $                                              from 'jquery';

//Component
import Header               from './header';
import Footer               from './footer';
import Nav                  from './nav';
import Signin               from '../login/signin';
import Receive              from '../receive';
import Service              from '../service';
import ServiceWatch         from '../service/watch';
import Feedback             from '../feedback';
import Kpi                  from '../kpi';
import Review               from '../review';
import ReviewWatch          from '../review/watch';

export default class Layout extends React.Component{

  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return (
      <section id="wrapper">
        <Route path="/sign-in" component={Signin}/>
        <Route path="/css" render={(props)=>(
          <section id="wrap">
            <Route path="/css" component={Header}/>
            <Route path="/css" component={Nav}/>
            <Route exact path="/css/list/receive" component={Receive}/>
            <Route exact path="/css/list/service" component={Service}/>
            <Route exact path="/css/list/service/:id" component={ServiceWatch}/>
            <Route exact path="/css/list/feedback" component={Feedback}/>
            <Route exact path="/css/list/kpi" component={Kpi}/>
            <Route exact path="/css/list/review" component={Review}/>
            <Route exact path="/css/list/review/:id" component={ReviewWatch}/>
            <Route path="/css" component={Footer}/>
          </section>
        )}/>
      </section>
    );
  }
}
