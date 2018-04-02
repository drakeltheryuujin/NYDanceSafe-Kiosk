import axios from 'axios';
import { apiUrl } from '../utility/util.js';

function sendTextMessage(state) {
  const url = apiUrl + '/TextMessages'
  axios.post(url, { description: state.description,
    url: state.downloadUrl,
    toNumber: state.contactInfo,
    optIn: state.optIn
  })
  .then((response) => {
    console.log("saved to text-messages!");
  })
}

export default sendTextMessage
