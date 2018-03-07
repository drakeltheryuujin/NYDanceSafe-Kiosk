import { connect } from 'react-redux'
import drugInfoCardOriginalAction from '../actions/drugInfoCardOriginalsAction'
import DrugInfoCardComponent from '../DrugInfoCardOriginals'

function mapStateToProps(state) {
  return {
    drugInfoCards: state.drugInfoCards
  }
}

const DrugInfoCardOriginalsContainer = connect(mapStateToProps, {getDrugInfoCardOriginals: drugInfoCardOriginalAction})(DrugInfoCardComponent)

export default DrugInfoCardOriginalsContainer
