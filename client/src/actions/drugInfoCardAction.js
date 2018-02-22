import axios from 'axios';

function getDrugInfoCardsSuccess(response) {
  return {
    type:'GET_DRUG_INFO_CARDS',
    payload: response
  }
}

function getDrugInfoCards() {
  const url = 'http://localhost:3001/api/DrugInfoCards'
  return dispatch => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(getDrugInfoCardsSuccess(response.data))
      })
  }
}

export default getDrugInfoCards
