import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../pages/Home';
import Medicines from '../pages/Medicines';
import Login from '../pages/Login';

import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import ConsultentDoctor from '../pages/ConsultentDoctor';
import CarePlan from '../pages/CarePlan';
import LabTest from '../pages/LabTest';
import Ayurveda from '../pages/Ayurveda';
import Package from '../pages/InNav';
import Dabar from '../pages/Dabar';
import Footer from '../pages/Footer';
import Personal from '../pages/Personal';
import AllData from '../pages/AllData';
import Private from './Private';
import SingleProductPage from '../pages/SingleProductPage';
import NotFound from '../pages/NotFound';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Medicines/>} />
        <Route path="/labtest" element={<LabTest/>}/>
        <Route path='/consultentdoctor' element={<ConsultentDoctor/>}/>
        <Route path='/ayurveda' element={<Ayurveda/>}/>
        <Route path='/careplan' element={<CarePlan/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/dabar' element={<Dabar/>}/>
        <Route path='/personal' element={<Personal/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/main' element={<AllData/>}/>
        <Route path='/package' element={ <Package/>}/>
        <Route path='/main/:main_id' element={
        <Private> 
<SingleProductPage/>
        </Private>
        }/>
      </Routes>
    </div>
  )
}

export default AllRoutes
