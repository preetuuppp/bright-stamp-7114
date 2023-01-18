    import React from 'react'
    import { NavLink } from 'react-router-dom';

    const links=[
        {path:'/',title: 'Home'},
        {path:'/medicines',title: 'Medicines'},
        {path:'/labtest',title: 'Lab test'},
        {path:'/consultentdoctor',title:'Consultentdoctor'},
        {path:'ayurveda',title:'Ayurveda'},
        {path:'/careplan',title:'CarePlan'},
        {path:'/login',title: 'Login'},
        {path:'/signup',title: 'Signup'},
        {path:'/cart',title: 'Cart'}
    ]
    const Navbar = () => {
        const defaultLinkStyle = {
            textDecoration: "none",color:"black"
        };
        
        const activeLinkStyle = {
            textDecoration: "none",color:"green"
        };
        
        
          return (
            <div>
   
        <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"10px",background:"white",fontSize:"20px",fontFamily:"sans-serif"}}>
          
        
        {links.map((link)=>(
            <NavLink style={({isActive})=>{
                return isActive ? activeLinkStyle :defaultLinkStyle
            }} 
            key={link.path} 
            to={link.path}>
                <h4>{link.title}</h4>
                 </NavLink>
          ))}
          
        </div>
            </div>
          )
        }
    
    

    
    export default Navbar
    