export default function(state=[], action) {
  switch (action.type) {
    case 'GET_ORIGINA_DRUG_INFO_CARDS':
      return action.payload;
    default:
      return state;
  }

}

