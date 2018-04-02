import axios from 'axios';
import { apiUrl } from '../utility/util.js';

function getHarmreductionSuccess(response) {
  return {
    type:'GET_INFO',
    payload: response
  }
}

function getHarmreductions() {
  const url = apiUrl + '/Harmreductions'
  return dispatch => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(getHarmreductionSuccess(response.data))
      })
  }
}

export default getHarmreductions
