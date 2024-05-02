import React, { useEffect, useState } from 'react'
import CreateBusinessCard from './routes/CreateBusinessCard'
import BusinessCards from './routes/BusinessCards'

export default function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/businessCards")
    .then(async function(res){
      const json = await res.json()
      // console.log("This is json+++++=>",json);
      setData(json.data)
    })
  },[])
  
  return (
    <>
      <CreateBusinessCard setBusinessData = {setData} businessData = {data} />
      <div className="business-card-wrapper">
        {
          data &&
          data.map((val,index)=>{
            return(
              <BusinessCards key={index} businessData={val} />
            )
          })
        }
      </div>
    </>
  )
}
