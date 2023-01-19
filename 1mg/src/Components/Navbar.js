    import React from 'react'
    import { NavLink } from 'react-router-dom';
    import { Image ,Box} from '@chakra-ui/react'
    import {FaCartPlus } from "react-icons/fa";

    const links=[
        // {path:'/',title:'Home' },
        {path:'/',title: 'Medicines'},
        {path:'/labtest',title: 'Lab test'},
        {path:'/consultentdoctor',title:'Consultent doctor'},
        {path:'ayurveda',title:'Ayurveda'},
        {path:'/careplan',title:'Care Plan'},
        {path:'/login',title: 'Login'},
        {path:'/signup',title: 'Signup'},
        {path:'/cart',title: <FaCartPlus/>}
    ]
    const Navbar = () => {
        const defaultLinkStyle = {
            textDecoration: "none",color:"black"
        };
        
        const activeLinkStyle = {
            textDecoration: "none",color:"#f16586"
        };
        
        
          return (
            <div>
   
        <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"10px",background:"white",fontSize:"20px",fontFamily:"sans-serif",border:"3px solid whitesmoke"}}>
          
        <Box boxSize='85px'>
  <Image src='data:image/jpeg;base64,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' alt='' />
</Box>
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
    