import React from 'react'
import './style.css'
export default function BusinessCards(props) {
  return (
    <div className='business-card'>
      <h2>{props.businessData.name}</h2>
      <p>{props.businessData.description}</p>
      <ul type="none">
        {
            props.businessData.interests.map((data,index)=>{
                return(
                    <li key={index}>{data}</li>
                )
            })
        }
      </ul>
      <div className='business-social-buttons'>
        {
            props.businessData.socialMedia.map((data,index)=>{
                return(
                    <a href={data.handleLink}>{data.handleName}</a>
                )
            })
        }
      </div>
    </div>
  )
}
