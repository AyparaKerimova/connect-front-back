import React, { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
   async function fetchData() {
      const resp = await fetch("http://localhost:3000/api/users");
      const req = await resp.json();
      console.log(req.data);
       setData(req.data);
    };
    fetchData()
  },[])
  return (
    <>
    <ul>
      {
        data.map((e,idx)=>{
          return(
            <li key={idx}>
             { e.fullName}
            {e.userName}
            </li>
          )
        })
      }
      </ul>
    </>
  )
}

export default Home