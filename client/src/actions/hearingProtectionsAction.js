import axios from 'axios';
import { apiUrl } from '../utility/util.js';

function getHearingProtectionsSuccess(response) {
  return {
    type:'GET_INFO',
    payload: response
  }
}

function getHearingProtections() {
  const url = apiUrl + '/HearingProtections'
  return dispatch => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(getHearingProtectionsSuccess(response.data))
      })
  }
}

export default getHearingProtections
