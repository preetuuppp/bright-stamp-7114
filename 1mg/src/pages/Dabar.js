import React, { useState,useEffect } from 'react'


const Dabar = (props) => {
    
    const[data,setData]=useState([])
    const fetchData = async () => {
        const response = await fetch("https://backend-json.vercel.app/dabar")
        const res = await response.json()
        setData(res)
      }
    
      useEffect(() => {
        fetchData()
      }, [])
    

  return (
    <div style={{display:"grid",gridGap:'30px', gridTemplateColumns:'repeat(3, 1fr)' , width:'80%',margin:'auto' ,padding:'10px',boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    
      {data.map(user =>
       (
         <div style={{border:'1px solid #EFEBE9',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:'60px'}} key={user.id}> { <img src={user.image} /> } <p>{user.discount}</p> 
           <b><p>{user.name}</p></b> <p>{user.price}</p>
           <div><button style={{color:'#f56567',borderRadius:'5px',padding:'10px',marginLeft:'5px',fontSize:'20px'}}><b>Add</b>  </button> </div>
           </div>
          
          ))}
          
    </div>
  )
}

export default Dabar
