import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Medicines from '../pages/Medicines';
import Login from '../pages/Login';

import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import ConsultentDoctor from '../pages/ConsultentDoctor';
import CarePlan from '../pages/CarePlan';
import LabTest from '../pages/LabTest';
import Ayurveda from '../pages/Ayurveda';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/medicines' element={<Medicines/>} />
        <Route path="/labtest" element={<LabTest/>}/>
        <Route path='/consultentdoctor' element={<ConsultentDoctor/>}/>
        <Route path='/ayurveda' element={<Ayurveda/>}/>
        <Route path='/careplan' element={<CarePlan/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
