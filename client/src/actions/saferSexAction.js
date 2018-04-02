import axios from 'axios';
import { apiUrl } from '../utility/util.js';

function getSaferSexSuccess(response) {
  return {
    type:'GET_INFO',
    payload: response
  }
}

function getSaferSex() {
  const url = apiUrl + '/SaferSexes'
  return dispatch => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(getSaferSexSuccess(response.data))
      })
  }
}

export default getSaferSex
