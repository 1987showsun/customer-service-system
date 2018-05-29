export default function put(
  state={
    workStatus : true,
  },action){
  switch( action.type ){
    case 'WORK_STATUS':
      state = {...state}
      break;
  }
  return state;
}
