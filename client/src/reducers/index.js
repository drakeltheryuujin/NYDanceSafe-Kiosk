import { combineReducers } from 'redux';
import drugInfoCardReducer from './drugInfoCardReducer';
import drugInfoCardOriginalReducer from './drugInfoCardOriginalReducer';
import harmreductionReducer from './harmreductionReducer';
import hearingProtectionReducer from './hearingProtectionReducer';
import hydrationNutritionReducer from './hydrationNuritionReducer';
import textModalReducer from './textModalReducer';

const rootReducer = combineReducers({
  hydrationNurition: hydrationNutritionReducer,
  hearingProtection: hearingProtectionReducer,
  harmreductions: harmreductionReducer,
  drugInfoCardOriginals: drugInfoCardOriginalReducer,
  drugInfoCards: drugInfoCardReducer,
  textModal: textModalReducer
})

export default rootReducer
