import { connect } from 'react-redux'
import sendEmailMessageAction from '../actions/emailModalAction'
import sendTextMessageAction from '../actions/textModalAction'
import ModalComponent from '../Modal'

function mapStateToProps(state) {
  return {
    description: state.description,
    url: state.downloadUrl,
    contactInfo: state.contactInfo,
    optIn: state.optIn
  }
}

const ModalContainer = connect(mapStateToProps, {sendEmailMessage: sendEmailMessageAction, sendTextMessage: sendTextMessageAction})(ModalComponent)

export default ModalContainer
