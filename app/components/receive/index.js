import React,{ Component }                            from 'react';
import { connect }                                    from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

//Compontents
import Tab                                            from '../common/tab';
import ListTitle                                      from './listTitle';
import List                                           from './list';

//Actions
import { getReceiveApi }                              from '../../actions/get';

@connect((state,props)=>{
  return{
    receiveApi : state.get.receiveApi
  }
})

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state={
      
    }
  }

  componentDidMount() {
    this.props.dispatch( getReceiveApi() );
  }

  render(){
    return(
      <main>
        <Tab />

        <section className="mainBlock">
          <div className="dataPrompt">
            <ul className="list prompt">
              <li>待領取數量：24</li>
              <li>當前頁面為回覆數量：2</li>
            </ul>
          </div>
        </section>

        <section className="mainBlock">
          <ListTitle />
          <List data={this.props.receiveApi}/>
        </section>

        <section className="mainBlock" data-text-align="center">
          <ul className="sitmap">
            <li><Link to="#">1</Link></li>
            <li><Link to="#">2</Link></li>
            <li><Link to="#">3</Link></li>
            <li><Link to="#">4</Link></li>
            <li><Link to="#">5</Link></li>
            <li><Link to="#">6</Link></li>
            <li><Link to="#">7</Link></li>
          </ul>
        </section>
      </main>
    );
  }
}
