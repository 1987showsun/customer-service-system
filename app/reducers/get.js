export default function get(
  state={
    kpiApi       : [],
    kpiWorkTotal : 0,
    receiveApi   : [],
  },action){
  switch( action.type ){
    case 'WORK_STATUS':
      state = { ...state }
      break;

    case 'API_KPI':
      state = { ...state, kpiApi: action.kpiData, kpiWorkTotal: action.workTotal }
      break;

    case 'API_RECEIVE':
      state = { ...state, receiveApi: action.receiveData }
      break;
  }
  return state;
}
