import React from 'react';
import { Route } from 'react-router-dom'
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/App.css';
import Home from './Home';
import DrugInfoCards from './containers/drugInfoCardContainer';
import DrugInfoCardsOld from './containers/drugInfoCardOriginalsContainer';
import Harmreductions from './containers/harmreductionContainer';
import HearingProtections from './containers/hearingProtectionContainer';
import HydrationNutrition from './containers/hydrationNutritionContainer';
import SaferSex from './containers/saferSexContainer';
import Consent from './containers/saferSexContainer';
import MappingTheUniverseOfDrugs from './containers/saferSexContainer';
import DrugInfoCardsEs from './containers/saferSexContainer';

const App = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/drug-info-cards" component={DrugInfoCards}/>
    <Route path="/harmreduction" component={Harmreductions}/>
    <Route path="/hydration-nutrition" component={HydrationNutrition}/>
    <Route path="/hearing-protection" component={HearingProtections}/>
    <Route path="/sexual-health" component={SaferSex}/>
    <Route path="/consent" component={Consent}/>
    <Route path="/mapping-the-universe-of-drugs" component={MappingTheUniverseOfDrugs}/>
    <Route path="/drug-info-cards-es" component={DrugInfoCardsEs}/>
    <Route path="/drug-info-cards-old" component={DrugInfoCardsOld}/>
  </div>
)
export default App
