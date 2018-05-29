import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

//Compontents
import Tab from '../common/tab';

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state={
      formObject : [{}]
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

  render(){
    return(
      <main>
        <Tab />

        <section className="mainBlock">
          <form onSubmit={this.handleSubmit.bind(this)} className="addMember">
            <ul>
              <li>
                <label>選擇日期：</label>
                <div className="inputOutLine">
                  <input type="date" name="startDate" value={this.state.formObject[0]['startDate']} className="input" onChange={this.handleChange.bind(this)} />
                </div>
              </li>
              <li>
                <div className="inputOutLine">
                  <input type="date" name="endDate" value={this.state.formObject[0]['endDate']} className="input" onChange={this.handleChange.bind(this)} />
                </div>
              </li>
              <li>
                <button type="submit" className="btn submit">查詢</button>
              </li>
            </ul>
          </form>
        </section>

        <section className="mainBlock">

          <ul className="list table title" data-item-number="11" data-text-align="center">
            <li>
              <ul>
                <li>用戶帳號</li>
                <li>客服人員</li>
                <li>分組</li>
                <li>全部領取</li>
                <li>全部回復</li>
                <li>未回覆</li>
                <li>審查人員</li>
                <li>預設覆蓋率</li>
                <li>審查覆蓋率</li>
                <li>回復正確率</li>
                <li>是否VIP客服</li>
              </ul>
            </li>
          </ul>
          <ul className="list table content" data-item-number="11" data-text-align="center">
            <li>
              <ul>
                <li><Link to="/css/list/review/000000000000">kefu1</Link></li>
                <li>齊齊</li>
                <li>1</li>
                <li>154</li>
                <li>120</li>
                <li>34</li>
                <li>龍朧</li>
                <li>50 %</li>
                <li>90 %</li>
                <li>90 %</li>
                <li>是</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="/css/list/review/000000000000">kefu2</Link></li>
                <li>齊齊</li>
                <li>4</li>
                <li>154</li>
                <li>120</li>
                <li>34</li>
                <li>龍朧</li>
                <li>50 %</li>
                <li>90 %</li>
                <li>90 %</li>
                <li>是</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="/css/list/review/000000000000">kefu3</Link></li>
                <li>齊齊</li>
                <li>3</li>
                <li>154</li>
                <li>120</li>
                <li>34</li>
                <li>龍朧</li>
                <li>50 %</li>
                <li>90 %</li>
                <li>90 %</li>
                <li>是</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="/css/list/review/000000000000">kefu4</Link></li>
                <li>齊齊</li>
                <li>2</li>
                <li>154</li>
                <li>120</li>
                <li>34</li>
                <li>龍朧</li>
                <li>50 %</li>
                <li>90 %</li>
                <li>90 %</li>
                <li>是</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="/css/list/review/000000000000">kefu5</Link></li>
                <li>齊齊</li>
                <li>3</li>
                <li>154</li>
                <li>120</li>
                <li>34</li>
                <li>龍朧</li>
                <li>50 %</li>
                <li>90 %</li>
                <li>90 %</li>
                <li>是</li>
              </ul>
            </li>
          </ul>
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
