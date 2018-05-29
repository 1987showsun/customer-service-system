import axios      from 'axios';

export function workStatus(){
  return function(dispatch){
    dispatch({ type:"WORK_STATUS" })
  }
}

export function getKpiApi(){
  return function(dispatch){
    axios.get('../json/kpi.json').then((data)=>{
      dispatch({ type:"API_KPI", kpiData: data.data[0]['item'], workTotal: data.data[0]['workTotal'] })
    })
  }
}

export function getReceiveApi(){
  return function(dispatch){
    axios.get('../json/receive.json').then((data)=>{
      dispatch({ type:"API_RECEIVE", receiveData: data.data[0]['item'] })
    })
  }
}
