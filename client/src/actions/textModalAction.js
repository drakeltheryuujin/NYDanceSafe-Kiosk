import axios from 'axios';
import apiUrl from '../utility/util.js';


function sendTextMessage(state) {
  const url = apiUrl + '/TextMessages'
  debugger
  axios.post(url, { description: state.description,
    url: state.downloadUrl,
    toNumber: state.mobileNumber,
    optIn: state.optIn
  })
  .then((response) => {
    console.log("saved");
  })
}

export default sendTextMessage
