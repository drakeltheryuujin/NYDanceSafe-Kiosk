import axios from 'axios';
import { apiUrl } from '../utility/util.js';


function sendEmailMessage(state) {
  const url = apiUrl + '/EmailMessages'
  axios.post(url, { 
    description: state.description,
    url: state.downloadUrl,
    toEmail: state.contactInfo,
    optIn: state.optIn
  })
  .then((response) => {
    console.log("saved to email-messages!");
  })
}

export default sendEmailMessage
