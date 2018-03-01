export default function(state=[], action) {
  switch (action.type) {
    case 'SEND_TEXT_MESSAGE':
      return action.payload;
    default:
      return state;
  }

}

