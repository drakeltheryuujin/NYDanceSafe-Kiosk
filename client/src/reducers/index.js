import { combineReducers } from 'redux';
import drugInfoCardReducer from './drugInfoCardReducer';
import textModalReducer from './textModalReducer';


const rootReducer = combineReducers({
  drugInfoCards: drugInfoCardReducer,
  textModal: textModalReducer
})


export default rootReducer
