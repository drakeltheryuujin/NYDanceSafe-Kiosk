import axios from 'axios';
import apiUrl from '../utility/util.js';

function getDrugInfoCardOriginalsSuccess(response) {
  return {
    type:'GET_DRUG_INFO_CARDS',
    payload: response
  }
}

function getDrugInfoCardOriginals() {
  const url = apiUrl + '/DrugInfoCardsOriginals'
  return dispatch => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(getDrugInfoCardOriginalsSuccess(response.data))
      })
  }
}

export default getDrugInfoCardOriginals
