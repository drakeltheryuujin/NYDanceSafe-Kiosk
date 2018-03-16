import { combineReducers } from 'redux';
import drugInfoCardReducer from './drugInfoCardReducer';
import drugInfoCardOriginalReducer from './drugInfoCardOriginalReducer';
import harmreductionReducer from './harmreductionReducer';
import hearingProtectionReducer from './hearingProtectionReducer';
import hydrationNutritionReducer from './hydrationNuritionReducer';
import saferSexReducer from './saferSexReducer';
import textModalReducer from './textModalReducer';

const rootReducer = combineReducers({
  saferSex: saferSexReducer,
  hydrationNurition: hydrationNutritionReducer,
  hearingProtection: hearingProtectionReducer,
  harmreductions: harmreductionReducer,
  drugInfoCardOriginals: drugInfoCardOriginalReducer,
  drugInfoCards: drugInfoCardReducer,
  textModal: textModalReducer
})

export default rootReducer
