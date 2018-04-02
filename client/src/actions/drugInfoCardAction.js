import axios from 'axios';
import { apiUrl } from '../utility/util.js';

function getDrugInfoCardsSuccess(response) {
  return {
    type:'GET_INFO',
    payload: response
  }
}

function getDrugInfoCards() {
  const url = apiUrl + '/DrugInfoCards'
  return dispatch => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(getDrugInfoCardsSuccess(response.data))
      })
  }
}

export default getDrugInfoCards
