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

const SexualHealth = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Consent = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const MappingTheUniverseOfDrugs = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const DrugInfoCardsEs = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const App = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/drug-info-cards" component={DrugInfoCards}/>
    <Route path="/harmreduction" component={Harmreductions}/>
    <Route path="/hydration-nutrition" component={HydrationNutrition}/>
    <Route path="/hearing-protection" component={HearingProtections}/>
    <Route path="/sexual-health" component={SexualHealth}/>
    <Route path="/consent" component={Consent}/>
    <Route path="/mapping-the-universe-of-drugs" component={MappingTheUniverseOfDrugs}/>
    <Route path="/drug-info-cards-es" component={DrugInfoCardsEs}/>
    <Route path="/drug-info-cards-old" component={DrugInfoCardsOld}/>
  </div>
)
export default App
