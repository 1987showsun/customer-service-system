import axios      from 'axios';

export function workStatus(){
  return function(dispatch){
    dispatch({ type:"WORK_STATUS" })
  }
}
