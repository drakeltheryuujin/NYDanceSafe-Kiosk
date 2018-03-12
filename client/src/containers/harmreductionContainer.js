import { connect } from 'react-redux'
import harmreductionAction from '../actions/harmreductionAction'
import HarmreductionComponent from '../Harmreduction'

function mapStateToProps(state) {
  return {
    drugInfoCards: state.drugInfoCards
  }
}

const HarmreductionsContainer = connect(mapStateToProps, {getHarmreductions: harmreductionAction})(HarmreductionComponent)

export default HarmreductionsContainer
