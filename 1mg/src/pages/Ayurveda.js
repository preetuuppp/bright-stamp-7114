import React, { useState,useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import Footer from './Footer'

const getCurrentPageUrl = (value) =>{
    value=Number(value);
    if(typeof value === 'number' && value<=0){
        value=1;
    }
    if(!value){
        value=1
    }
    return value
};
const getUrl=(url,sort,orderBy)=>{
    if(sort && orderBy){
return (url=`${url}&_sort=${sort}&_order=${orderBy}`);
    }
    return url;
}


const Ayurveda = () => {
    
    const[data,setData]=useState([])
    let [searchParams, setSearchParams] = useSearchParams();
const[page,setPage]=useState(getCurrentPageUrl(searchParams.get('page'))||1)
const[orderBy,setOrderBy]=useState("")
const sort="price";
   



let limit=3
useEffect(()=>{
let apiUrl=getUrl(`https://backend-json.vercel.app/tataMg/?_page=${page}&_limit=${limit}`,
sort, orderBy);




fetch(apiUrl).then((res)=>res.json()).then((maindata)=>{console.log(maindata);
setData(maindata)})
},[page,orderBy])

useEffect(()=>{
    let paramObj={page};
    if(orderBy){
        paramObj.orderBy = orderBy
     }
    setSearchParams(paramObj)
},[page,orderBy])





// const fetchData = async () => {
//         const response = await fetch("https://backend-json.vercel.app/tataMg")
//         const res = await response.json()
//         setData(res)
//         // console.log(res)
//       }
    
//       useEffect(() => {
//         fetchData()
//       }, [])
    

  return (
    <>
<button onClick={()=>setOrderBy("asc")} style={{border:"1px solid gray", padding:'10px'}}>Low to High</button>
        <button onClick={()=>setOrderBy("desc")} style={{border:"1px solid gray", padding:'10px'}}>High to Low</button>



    <div style={{display:"grid",gridGap:'30px', gridTemplateColumns:'repeat(3, 1fr)' , width:'90%',margin:'auto' ,padding:'10px',boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    
      {data.map(user =>
       (
         <div style={{border:'1px solid #EFEBE9',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:'60px'}} key={user.id}> { <img src={user.image} /> } <p>{user.off}</p> 
           <p>{user.name}</p> <b><p>{user.price}/-</p></b>
           <Link to={`/main/${data.id}`} style={{color:'#EC407A'}}>More..</Link>
           <div><button style={{color:'#f56567',borderRadius:'5px',padding:'10px',marginLeft:'5px',fontSize:'20px'}}><b>Add</b>  </button> </div>
           </div>
          
          ))}
          
    </div>
    <br />
    <div style={{margin:'auto',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:'10%'}}>
<button style={{border:"1px solid gray", padding:'10px'}} disabled={page==1}  onClick={()=>setPage(page-1)}>Prev</button>
<button style={{border:"1px solid gray", padding:'10px'}} >{page}</button>
<button style={{border:"1px solid gray", padding:'10px'}} onClick={()=>setPage(page+1)}>Next</button>
</div>
    <br />
    <br />
    <Footer/
    ></>
  )
}

export default Ayurveda
