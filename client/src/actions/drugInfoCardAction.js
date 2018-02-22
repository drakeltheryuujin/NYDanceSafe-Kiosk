var rp = require('request-promise');

function getDrugInfoCards() {
    const url = 'http://localhost:3001/api/DrugInfoCards'
    const request = axios.get(url)
  return {
    type:'GET_DRUG_INFO_CARDS',
    payload: request
  }
}

export default getDrugInfoCards
