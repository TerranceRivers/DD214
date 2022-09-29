import React from 'react';
import axios from 'axios';

const list =  [axios.get('http://localhost:5000/collection/all')
.then(res => { handleResult(res) }) 
.catch(err => console.log(err))]
function handleResult(data) {
  console.log(data); // result now available in function
}
export default list;

