import { connect } from 'react-redux'
import sendTextMessageAction from '../actions/textModalAction'
import TextModalComponent from '../TextModal'

function mapStateToProps(state) {
  return {
    drugInfoCards: state.drugInfoCards
  }
}

const TextModalContainer = connect(mapStateToProps, {sendTextMessage: sendTextMessageAction})(TextModalComponent)

export default TextModalContainer
