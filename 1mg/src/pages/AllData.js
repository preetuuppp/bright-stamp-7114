import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom'


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
const AllData = () => {
    const[updata,setUpdata]=useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const[page,setPage]=useState(getCurrentPageUrl(searchParams.get('page'))||1)
    const[orderBy,setOrderBy]=useState("")
    const sort="price";


   


    let limit=3
    useEffect(()=>{
   let apiUrl=getUrl(`https://backend-json.vercel.app/mix/?_page=${page}&_limit=${limit}`,
   sort, orderBy);
   
   
   
   
 fetch(apiUrl).then((res)=>res.json()).then((maindata)=>{console.log(maindata);
setUpdata(maindata)})
    },[page,orderBy])
 
    useEffect(()=>{
        let paramObj={page};
        if(orderBy){
            paramObj.orderBy = orderBy
         }
        setSearchParams(paramObj)
    },[page,orderBy])
 
    return (
        <> 
        <button onClick={()=>setOrderBy("asc")} style={{border:"1px solid gray", padding:'10px'}}>Low to High</button>
        <button onClick={()=>setOrderBy("desc")} style={{border:"1px solid gray", padding:'10px'}}>High to Low</button>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',alignItems:'center',justifyContent:'center',margin:'auto',gap:'20px',marginTop:'20px',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
     
      {
        updata?.map((data)=>{
            return <div key={data.id} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",marginTop:'20px'}}>
                <img src={data.image} alt=""width={100} height={100} />
                <p>{data.name}</p>
                {/* <strike>{data.price}/-</strike> */}
                <b><p>{data.price}</p></b>
                <Link to={`/main/${data.id}`} style={{color:'#EC407A'}}>More..</Link>
            </div>
        })
      }

    </div>
      <div style={{margin:'auto',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:'10%'}}>
        <button style={{border:"1px solid gray", padding:'10px'}} disabled={page==1}  onClick={()=>setPage(page-1)}>Prev</button>
        <button style={{border:"1px solid gray", padding:'10px'}} >{page}</button>
        <button style={{border:"1px solid gray", padding:'10px'}} onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </>
  )
}

export default AllData
