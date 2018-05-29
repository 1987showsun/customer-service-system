import React,{ Component }                            from 'react';
import { connect }                                    from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

//Compontents
import Tab                                            from '../common/tab';
import ListTitle                                      from './listTitle';
import List                                           from './list';

//Actions
import { getKpiApi }                                  from '../../actions/get';

@connect((state,props)=>{
  return{
    kpiData      : state.get.kpiApi,
    kpiWorkTotal : state.get.kpiWorkTotal
  }
})

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state={
      listTitle  : [''],
      formObject : [{}],
      sortingArray : ['all','increment','decreasing'],
      sorting      : [{
        'team'      : 'all',
        'work'      : 'all',
        'totalWork' : 'all',
        'receive'   : 'all'
      }]
    }
  }

  componentDidMount() {
    this.props.dispatch( getKpiApi() );
  }

  handleChange(e){
    let name        = e.target.name,
        val         = e.target.value,
        formObject  = this.state.formObject;

    formObject[0][name] = val;
    this.setState({
      formObject : formObject,
    })
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <main>
        <Tab />

        <section className="mainBlock" data-justify-content="space-between">
          <span className="prompt">當前月份標準工作量：{this.props.kpiWorkTotal}</span>
          <form onSubmit={this.handleSubmit.bind(this)} className="addMember">
            <ul>
              <li>
                <label>選擇日期：</label>
                <div className="inputOutLine">
                  <input type="date" name="startDate" value={this.state.formObject[0]['startDate']} className="input" onChange={this.handleChange.bind(this)}/>
                </div>
              </li>
              <li>
                <div className="inputOutLine">
                  <input type="date" name="endDate" value={this.state.formObject[0]['endDate']} className="input" onChange={this.handleChange.bind(this)}/>
                </div>
              </li>
              <li>
                <button type="submit" className="btn submit">查詢</button>
              </li>
            </ul>
          </form>
        </section>

        <section className="mainBlock">
          <ListTitle />
          <List data={this.props.kpiData} />
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
