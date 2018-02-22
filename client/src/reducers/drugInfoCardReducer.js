const drugInfoCardReducer = (state=[] ,action) => {


  switch (action.type) {
    case 'GET_DRUG_INFO_CARDS':
      return {
        info: action.payload.data
      }
    default:
      return state
  }

}





export default drugInfoCardReducer
