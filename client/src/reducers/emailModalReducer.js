export default function(state=[], action) {
  switch (action.type) {
    case 'SEND_EMAIL_MESSAGE':
      return action.payload;
    default:
      return state;
  }

}

