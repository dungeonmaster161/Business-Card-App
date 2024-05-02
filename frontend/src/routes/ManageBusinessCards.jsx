import React, { useEffect, useState } from 'react'
import AdminBusinessTable from '../components/AdminBusinessTable'

export default function ManageBusinessCards() {
    const [businessCards, setBusinessCards] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/businessCards")
        .then( async function(res){
            const json = await res.json()
            setBusinessCards(json.data)
        })
    },[])
  return (
    <div>
        {businessCards.length!=0 && <AdminBusinessTable cardData={businessCards} /> } 
    </div>
  )
}
