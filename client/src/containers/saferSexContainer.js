import { connect } from 'react-redux'
import saferSexAction from '../actions/saferSexAction'
import SaferSexComponent from '../SaferSex'

function mapStateToProps(state) {
  return {
    drugInfoCards: state.drugInfoCards
  }
}

const SaferSexContainer = connect(mapStateToProps, {getSaferSex: saferSexAction})(SaferSexComponent)

export default SaferSexContainer
