import { combineReducers } from 'redux';
import drugInfoCardReducer from './drugInfoCardReducer';
import textModalReducer from './textModalReducer';


const rootReducer = combineReducers({
  drugInfoCards: drugInfoCardReducer
  drugInfoCards: textModalReducer
})


export default rootReducer
