import React, { useState } from 'react'

export default function AdminBusinessTable({ cardData }) {
  console.log("This is business cards",cardData[1]);
  const [inputAllow,setInputAllow] = useState()
  const [name,setName] = useState()
  const [description,setDescription] = useState()
  const [socialMedia,setSocialMedia] = useState()
  const [interests,setInterests] = useState()
  function handleSocialMedia(e,i,handle){
    let value = e.target.value
    console.log(socialMedia," Social Media");
    let newSocialMedia  = socialMedia 
    newSocialMedia[i][handle] = value
    setSocialMedia([...newSocialMedia])
  }
  function handleInterest(e,i){
    let value = e.target.value
    let newInterest = interests
    newInterest[i] = value
    setInterests([...newInterest])
  }
  return (
    <table border={1}>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Social Media</th>
        <th>Interests</th>
        <th>Actions</th>
      </tr>
      {
        cardData.map((data,index)=>{
          return(
            <tr>
              <td> { inputAllow != data._id ? data.name : <input type='text' value={name} onChange={(e)=>{
              setName(e.target.value)
              }} /> }</td>
              <td>{ inputAllow != data._id ? data.description : <input type='text' value={description} onChange={(e)=>{
                setDescription(e.target.value)
              }} /> }</td>
              <td><tr>{data.socialMedia.map((dataSocial,i)=>{
                return(
                  <>
                    <td>
                      { inputAllow != data._id ?  dataSocial.handleName : <input type='text' value={socialMedia[i].handleName} onChange={(e)=>handleSocialMedia(e,i,'handleName')} /> }
                    </td>
                    <td>
                      { inputAllow != data._id ?  dataSocial.handleLink : <input type='text' value={socialMedia[i].handleLink} onChange={(e)=>handleSocialMedia(e,i,'handleLink')} /> }
                    </td>
                  </>
                )
              })} </tr></td>
              <td><tr>{data.interests.map((val,i)=>{
                return(
                  <>
                    <td>
                      { inputAllow != data._id ? val : <input type='text' value={interests[i]} onChange={(e)=>handleInterest(e,i)} />  }
                    </td>
                  </>
                )
              })}</tr></td>
              <td>
                { 
                inputAllow !=data._id ?
                <button onClick={()=>{ 
                setInputAllow(data._id)
                setName(data.name)
                setDescription(data.description)
                setSocialMedia(data.socialMedia)
                setInterests(data.interests)  }}>Edit</button>
                :
                <button onClick={()=>{ 
                  console.log(name," name");
                  fetch("http://localhost:8080/updateBusinessCard",{
                    method:'put',
                    headers:{
                      'content-type':'application/json'
                    },
                    body:JSON.stringify({
                      id: inputAllow,
                      name:name,
                      description:description,
                      socialMedia:socialMedia,
                      interests:interests
                    })
                  })
                  .then(async function(res){
                    const json = await res.json()
                    try {
                        if(!json.success){
                          alert("Data not updated")
                          return
                        }
                        alert("Data updated")
                    } catch (error) {
                        console.log("Error while updating data",error);
                    }
                  })
                  // setInputAllow("")
                  // setName("")
                  // setDescription()
                  // setSocialMedia("")
                  // setInterests("")  
                }}>Save</button>
                }
                <button>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </table>
  )
}
