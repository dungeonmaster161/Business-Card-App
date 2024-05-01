import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

export default function BusinessCard() {
  const [name,setName] = useState()
  const [description,setDescription] = useState()
  const [socialMedia,setSocialMedia] = useState([{
    socialMediaName:'',
    socialMediaHandle:''
  }])
  const [interests,setInterests] = useState([''])

  function addSocialMediaHandleButton(){
    setSocialMedia([...socialMedia,{
      handleName:'',
      handleLink:''
    }])
  }

  function addInterestsHandleButton(){
    setInterests([...interests,''])
  }

  function handleSocialMediaChange(e,index,objectName){
    console.log(`
    Event value ${e.target.value}

    Index value ${index}

    Object Name ${objectName}
    `);
    let value = socialMedia
    value[index][objectName] = e.target.value
    // console.log('Value Social media name', value[i].socialMediaName);
    setSocialMedia(value)
  }

  function handleInterest(e,index){
    let value = interests
    value[index] = e.target.value
    setInterests(value)
  }
  return (
    <div>
      <input type="text" placeholder='Enter Name' onChange={(e)=>{
        let value = e.target.value
        setName(value)
      }} /><br />
      <textarea placeholder='Enter Description' onChange={(e)=>{
        let value = e.target.value
        setDescription(value)
      }} ></textarea> <br />
      {
        socialMedia.map((data,index)=>{
          return(
            <div inedx={index}>
              <input type='text'  placeholder='Social Media Name'  onChange={(e)=>handleSocialMediaChange(e,index,'handleName')}
                
                // console.log(index);
                // let value = socialMedia
                // // value[i].socialMediaName = e.target.value
                // console.log('Value Social media name', value[i].socialMediaName);
                // setSocialMedia(value)
               /> &nbsp;
              <input type='text' placeholder='Social Media Link' onChange={(e)=>handleSocialMediaChange(e,index,'handleLink')}
                // console.log(index);
                // let value = socialMedia
                // value[i].socialMediaHandle = e.target.value
                // console.log('value social media handle',value);
                // setSocialMedia(value)
              
               />
            </div>
          )
        })
       }<FaPlus onClick={addSocialMediaHandleButton}  /> <br />
       {
        interests.map((data,index)=>{
          return(
            <span index={index}>
              <input type='text'  placeholder='Enter interests' onChange={(e)=>handleInterest(e,index)}  /> 
            </span>
          )
        })
       }
      <FaPlus onClick={addInterestsHandleButton} /> <br />
      <button onClick={()=>{
        fetch("http://localhost:8080/addBusinessCard",{
          method:'POST',
          body:JSON.stringify({
            name:name,
            description:description,
            socialMedia:socialMedia,
            interests:interests
          }),
          headers:{
            "content-type":"application/json"
          }
        })
        .then(async function(res){
          const json  = res.json()
          alert("data added")
        })
      }}>Create business card</button>
    </div>
  )
}
