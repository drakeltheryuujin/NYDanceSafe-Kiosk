import axios from 'axios';
import { apiUrl } from '../utility/util.js';

function getDrugInfoCardOriginalsSuccess(response) {
  return {
    type:'GET_INFO',
    payload: response
  }
}

function getDrugInfoCardOriginals() {
  const url = apiUrl + '/DrugInfoCardOriginals'
  return dispatch => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(getDrugInfoCardOriginalsSuccess(response.data))
      })
  }
}

export default getDrugInfoCardOriginals
