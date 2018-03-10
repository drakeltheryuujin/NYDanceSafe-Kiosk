import { combineReducers } from 'redux';
import drugInfoCardReducer from './drugInfoCardReducer';
import drugInfoCardOriginalReducer from './drugInfoCardOriginalReducer';
import textModalReducer from './textModalReducer';


const rootReducer = combineReducers({
  drugInfoCardOriginals: drugInfoCardOriginalReducer,
  drugInfoCards: drugInfoCardReducer,
  textModal: textModalReducer
})


export default rootReducer
