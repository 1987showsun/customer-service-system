export default function post(
  state={
  },action){
  switch( action.type ){
    case 'WORK_STATUS':
      state = {...state}
      break;
  }
  return state;
}
