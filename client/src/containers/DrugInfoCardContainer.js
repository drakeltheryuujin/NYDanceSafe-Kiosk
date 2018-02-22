import { connect } from 'react-redux'
import drugInfoCardAction from '../actions/drugInfoCardAction'
import DrugInfoCardComponent from '../DrugInfoCards'

function mapStateToProps(state, ownprops) {
    return {
      info: state.info
    }
}

const DrugInfoCardContainer = connect(mapStateToProps, {getDrugInfoCards: drugInfoCardAction})(DrugInfoCardComponent)

export default DrugInfoCardContainer
