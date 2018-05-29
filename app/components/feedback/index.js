import React,{ Component }                            from 'react';
import { Provider }                                   from 'react-redux';
import { Route, Link }                                from 'react-router-dom';
import $                                              from 'jquery';

//Compontents
import Tab from '../common/tab';

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      filterStatusArray  : ['all','undone','completed'],
      filterStatusSelect : 'all',
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

  render(){
    return(
      <main>
        <Tab />

        <section className="mainBlock" data-justify-content="space-between">
          <span className="prompt">當前月份標準工作量：9999999</span>
          <div className="dataPrompt">
            <ul className="list prompt btn">
              <li><button className={`promptbBtn ${ (this.state.filterStatusSelect=='all')? true:false }`} onClick={this.filterObject.bind(this,'all')}>全部 VIP</button></li>
              <li><button className={`promptbBtn ${ (this.state.filterStatusSelect=='undone')? true:false }`} onClick={this.filterObject.bind(this,'undone')}>未領取</button></li>
              <li><button className={`promptbBtn ${ (this.state.filterStatusSelect=='completed')? true:false }`} onClick={this.filterObject.bind(this,'completed')}>已領取</button></li>
            </ul>
          </div>
        </section>

        <section className="mainBlock">
          <ul className="list table title feedback" data-item-number="8" data-text-align="center">
            <li>
              <ul>
                <li>用戶</li>
                <li>留言時間</li>
                <li>留言</li>
                <li>回覆內容</li>
                <li>領取人</li>
                <li>領取時間</li>
                <li>回覆人</li>
                <li>回覆時間</li>
              </ul>
            </li>
          </ul>
          <ul className="list table content feedback" data-item-number="8" data-text-align="center">
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><Link to="">895465</Link><span className="level">VIP 5</span></li>
                <li>2018-2-13 12:58:15</li>
                <li><p>我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言</p></li>
                <li><p>我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆我是回覆</p></li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
                <li>齊齊</li>
                <li>2018-2-13 12:58:15</li>
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
