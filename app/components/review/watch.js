import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

//Compontents
import Tab from '../common/tab';

export default class Watch extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      filterStatusArray  : ['all','undone','completed'],
      filterStatusSelect : 'all',
      formObject         : [{}]
    }
  }

  filterObject(select){
    let filterStatusArray = this.state.filterStatusArray;
    const result = filterStatusArray.filter((el,i,arr)=>{
      if( select===el ){
        return el;
      }
    });
    this.setState({
      filterStatusSelect : result,
    })
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
          <div className="dataPrompt">
            <ul className="list prompt btn">
              <li><button className={`promptbBtn ${ (this.state.filterStatusSelect=='all')? true:false }`} onClick={this.filterObject.bind(this,'all')}>全部</button></li>
              <li><button className={`promptbBtn ${ (this.state.filterStatusSelect=='undone')? true:false }`} onClick={this.filterObject.bind(this,'undone')}>未審查</button></li>
            </ul>
          </div>
          <div className="dataPrompt">
            <ul className="list prompt">
              <li>預設覆蓋率：50%</li>
              <li>審查覆蓋率：98%</li>
            </ul>
          </div>

          <form onSubmit="" className="addMember">
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

          <ul className="list table title feedback" data-item-number="7" data-text-align="center">
            <li>
              <ul>
                <li>用戶</li>
                <li>留言時間</li>
                <li>留言</li>
                <li>回覆內容</li>
                <li>審查</li>
                <li>回覆時間</li>
                <li>處理人</li>
              </ul>
            </li>
          </ul>
          <ul className="list table content feedback" data-item-number="7" data-text-align="center">
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li><span className="btn check true"></span></li>
                <li>2018-2-13 12:58:15</li>
                <li></li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li><span className="btn check true"></span></li>
                <li>2018-2-13 12:58:15</li>
                <li></li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li><span className="btn check false"></span></li>
                <li>2018-2-13 12:58:15</li>
                <li></li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li><span className="btn check false"></span></li>
                <li>2018-2-13 12:58:15</li>
                <li>龍龍</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li><span className="btn check true"></span></li>
                <li>2018-2-13 12:58:15</li>
                <li>龍龍</li>
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
