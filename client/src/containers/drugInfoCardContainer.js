import { connect } from 'react-redux'
import drugInfoCardAction from '../actions/drugInfoCardAction'
import DrugInfoCardComponent from '../DrugInfoCards'

function mapStateToProps(state) {
  return {
    drugInfoCards: state.drugInfoCards
  }
}

const DrugInfoCardContainer = connect(mapStateToProps, {getDrugInfoCards: drugInfoCardAction})(DrugInfoCardComponent)

export default DrugInfoCardContainer
