import { combineReducers } from 'redux';
import drugInfoCardReducer from './drugInfoCardReducer';


const rootReducer = combineReducers({
  drugInfoCards: drugInfoCardReducer
})


export default rootReducer
