export default function(state=[], action) {
  switch (action.type) {
    case 'GET_INFO':
      return action.payload;
    default:
      return state;
  }

}

