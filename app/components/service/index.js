import React,{ Component }                            from 'react';
import { connect }                                    from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

//Compontents
import Tab                                            from '../common/tab';

//Actions
import { workStatus }                                 from '../../actions/put';

@connect((state,props)=>{
  return{
    workStatus : state.put.workStatus
  }
})

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state={
      formObject : [{
        "username" : "",
        "password" : ""
      }],
      workStatus   : props.workStatus,
      sortingArray : ['all','increment','decreasing'],
      sorting      : [{
        'team' : 'all',
      }]
    }
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

  workStatus(status){
    this.props.dispatch( workStatus(status) )
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
      <main>
        <Tab />

        <section className="mainBlock">
          <ul className="list table title" data-item-number="9" data-text-align="center">
            <li>
              <ul>
                <li>客服證號</li>
                <li>客服人員</li>
                <li>分組<span className={`btn sorting ${this.state.sorting[0]['team']}`} onClick={this.sorting.bind( this,'team',this.state.sorting[0]['team'] )}></span></li>
                <li>上班狀態</li>
                <li>操作</li>
                <li>KPI狀態</li>
                <li>視察</li>
                <li>審查客服</li>
                <li>VIP 客服</li>
              </ul>
            </li>
          </ul>
          <ul className="list table content" data-item-number="9" data-text-align="center">
            <li>
              <ul>
                <li>kefu1</li>
                <li>齊齊</li>
                <li>1</li>
                <li>上班中</li>
                <li><span className={`btn switch ${this.state.workStatus}`} onClick={this.workStatus.bind(this,'true')}>設為下班</span></li>
                <li>當前不算入</li>
                <li><Link to="/css/list/service/000000000">視察 (56)</Link></li>
                <li><span className="btn switch false">設為審查客服</span></li>
                <li><span className="btn switch false">設為VIP客服</span></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>kefu2</li>
                <li>賽賽</li>
                <li>1</li>
                <li>下班中</li>
                <li><span className="btn switch false">設為上班</span></li>
                <li>當前不算入</li>
                <li><Link to="/css/list/service/000000000">視察 (56)</Link></li>
                <li><span className="btn switch true">撤銷審查客服</span></li>
                <li><span className="btn switch true">撤銷VIP客服</span></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>kefu3</li>
                <li>毛毛</li>
                <li>1</li>
                <li>上班中</li>
                <li><span className="btn switch false">設為下班</span></li>
                <li>當前不算入</li>
                <li><Link to="/css/list/service/000000000">視察 (56)</Link></li>
                <li><span className="btn switch false">設為審查客服</span></li>
                <li><span className="btn switch true">撤銷VIP客服</span></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>kefu4</li>
                <li>蛋蛋</li>
                <li>1</li>
                <li>下班中</li>
                <li><span className="btn switch true">設為上班</span></li>
                <li>當前不算入</li>
                <li><Link to="/css/list/service/000000000">視察 (56)</Link></li>
                <li><span className="btn switch true">撤銷審查客服</span></li>
                <li><span className="btn switch true">撤銷VIP客服</span></li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mainBlock">
          <form onSubmit={this.handleSubmit.bind(this)} className="addMember">
            <ul>
              <li>
                <label>創建帳號：</label>
                <div className="inputOutLine">
                  <input type="text" name="username" value={this.state.formObject[0]['username']} className="input" onChange={this.handleChange.bind(this)} />
                </div>
              </li>
              <li>
                <label>密碼：</label>
                <div className="inputOutLine">
                  <input type="password" name="password" value={this.state.formObject[0]['password']} className="input" onChange={this.handleChange.bind(this)}/>
                </div>
              </li>
              <li>
                <button type="submit" className="btn submit">新增</button>
              </li>
            </ul>
          </form>
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
