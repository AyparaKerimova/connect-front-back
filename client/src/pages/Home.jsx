import React, { useEffect } from 'react'
import { useState } from 'react'
import Hero from '../components/Hero';
import UserList from '../components/UserList';
import UserCard from '../components/UserCard';

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
    <div style={{  overflow: "hidden"}}>
    <Hero/>
      <UserList>
        {
          data && data.map((e)=>{
            return(
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <UserCard key={e._id} userName={e.userName} url={e.url} />
              </div>
            )
          })
        }
      </UserList>
      </div>
    </>
  )
}

export default Home