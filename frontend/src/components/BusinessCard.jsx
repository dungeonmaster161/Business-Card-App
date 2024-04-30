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
      socialMediaName:'',
      socialMediaHandle:''
    }])
  }

  function addInterestsHandleButton(){
    setInterests([...interests,''])
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
            <div>
              <input type='text'  placeholder='Social Media Name'  onChange={(e,index)=>{
               
                // console.log(index);
                // let value = socialMedia
                // // value[i].socialMediaName = e.target.value
                // console.log('Value Social media name', value[i].socialMediaName);
                // setSocialMedia(value)
              }} /> &nbsp;
              <input type='text' placeholder='Social Media Link' onChange={(e,index)=>{
                // console.log(index);
                // let value = socialMedia
                // value[i].socialMediaHandle = e.target.value
                // console.log('value social media handle',value);
                // setSocialMedia(value)
              }} />
            </div>
          )
        })
       }<FaPlus onClick={addSocialMediaHandleButton}  /> <br />
       {
        interests.map((i)=>{
          return(
            <span>
              <input type='text'  placeholder='Enter interests' onChange={(e,i)=>{
                let value = interests
                value[i] = e.target.value
                setInterests(value)
              }}  /> 
            </span>
          )
        })
       }
      <FaPlus onClick={addInterestsHandleButton} /> <br />
      <button onClick={()=>{
        console.log('Social media',socialMedia);
        console.log('Interests',interests);
      }}>Create business card</button>
    </div>
  )
}
