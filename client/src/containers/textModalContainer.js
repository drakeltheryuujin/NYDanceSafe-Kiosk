import { connect } from 'react-redux'
import sendTextMessageAction from '../actions/textModalAction'
import TextModalComponent from '../TextModal'

function mapStateToProps(state) {
  return {
    description: state.description,
    url: state.downloadUrl,
    toNumber: state.mobileNumber,
    optIn: state.optIn
  }
}

const TextModalContainer = connect(mapStateToProps, {sendTextMessage: sendTextMessageAction})(TextModalComponent)

export default TextModalContainer
