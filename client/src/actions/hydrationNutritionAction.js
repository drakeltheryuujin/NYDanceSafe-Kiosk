import axios from 'axios';
import { apiUrl } from '../utility/util.js';

function getHydrationNutritionSuccess(response) {
  return {
    type:'GET_INFO',
    payload: response
  }
}

function getHydrationNutritions() {
  const url = apiUrl + '/HydrationNutritions'
  return dispatch => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(getHydrationNutritionSuccess(response.data))
      })
  }
}

export default getHydrationNutritions
