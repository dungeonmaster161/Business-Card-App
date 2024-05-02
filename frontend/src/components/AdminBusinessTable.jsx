import React, { useState } from 'react'

export default function AdminBusinessTable({ cardData }) {
  console.log("This is business cards",cardData);
  const [inputAllow,setInputAllow] = useState()
  const [name,setName] = useState()
  const [description,setDescription] = useState()
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
              <td><tr>{data.socialMedia.map((data,index)=>{
                return(
                  <>
                    <td>
                      {data.handleName}
                    </td>
                    <td>
                      {data.handleLink}
                    </td>
                  </>
                )
              })} </tr></td>
              <td><tr>{data.interests.map((data,index)=>{
                return(
                  <>
                    <td>{data}</td>
                    <td>{data}</td>
                  </>
                )
              })}</tr></td>
              <td>
                <button onClick={()=>{
                // fetch()
                setInputAllow(data._id)
                setName(data.name)
                console.log(data.description,"data description");
                setDescription(data.description)
                }}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </table>
  )
}
