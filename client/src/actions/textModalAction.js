import axios from 'axios';

function sendTextMessage() {
  const url = 'http://localhost:3001/api/SendText'
  return dispatch => {
        axios(url {
          method: 'POST',
          headers: {
          Accept: 'application/JSON',
          'Content-Type': 'application/JSON'
        },
        body: JSON.stringify({recipient: this.state.recipient})
      })
      .then(resp => resp.json())
      .then(resp => {
      console.log(resp)
    })
  }
}

export default getDrugInfoCards
