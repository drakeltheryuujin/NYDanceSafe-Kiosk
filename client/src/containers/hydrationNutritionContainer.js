import { connect } from 'react-redux'
import hydrationNutritionAction from '../actions/hydrationNutritionAction'
import HydrationNutritionComponent from '../HydrationNutrition'

function mapStateToProps(state) {
  return {
    drugInfoCards: state.drugInfoCards
  }
}

const HydrationNutritionContainer = connect(mapStateToProps, {getHydrationNutritions: hydrationNutritionAction})(HydrationNutritionComponent)

export default HydrationNutritionContainer
