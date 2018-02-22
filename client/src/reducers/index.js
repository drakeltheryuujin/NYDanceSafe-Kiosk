import { combineReducers } from 'redux';
import drugInfoCards from './drugInfoCardReducer';


const rootReducer = combineReducers({
  drugInfoCards: drugInfoCards
})


export default rootReducer
