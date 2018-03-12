import { connect } from 'react-redux'
import hearingProtectionAction from '../actions/hearingProtectionsAction'
import HearingProtectionComponent from '../HearingProtections'

function mapStateToProps(state) {
  return {
    drugInfoCards: state.drugInfoCards
  }
}

const HearingProtectionContainer = connect(mapStateToProps, {getHearingProtections: hearingProtectionAction})(HearingProtectionComponent)

export default HearingProtectionContainer
