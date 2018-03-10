import { connect } from 'react-redux'
import drugInfoCardOriginalAction from '../actions/drugInfoCardOriginalsAction'
import DrugInfoCardOriginalComponent from '../DrugInfoCardOriginals'

function mapStateToProps(state) {
  return {
    drugInfoCards: state.drugInfoCards
  }
}

const DrugInfoCardOriginalsContainer = connect(mapStateToProps, {getDrugInfoCardOriginals: drugInfoCardOriginalAction})(DrugInfoCardOriginalComponent)

export default DrugInfoCardOriginalsContainer
