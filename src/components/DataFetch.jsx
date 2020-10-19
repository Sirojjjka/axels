import Axios from 'axios';
import React, {useState, useEffect} from 'react';

let DataFetch = () =>{

 const [employess,setEmployees] = useState([]);

 useEffect(()=>{
   Axios.get('http://api.additivasia.io/api/v1/assignment/employees').then(
response => {
  console.log(response.data)
  setEmployees(response.data)
}     
   )
 })

  return(
<div className='main'>
  <h2>List of employees:</h2>
  <ul>
  {employess.map(employess =>(<li key = {employess.id}>{employess}</li>))}
  </ul>



</div>
  )
}

export default DataFetch;