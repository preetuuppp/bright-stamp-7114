import React from 'react'
import { useNavigate } from 'react-router-dom';
const InNav = () => {
  const navigate=useNavigate();
  const handleClick=() => {
    navigate('/ayurveda');
  }

  const personalClick=() => {
    navigate('/personal');
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavlightDropdown" aria-controls="navbarNavlightDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavlightDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarlightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>
          Ayurveda
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarlightDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Kerala Ayurveda</a></li>
            <li><a className="dropdown-item" href="#">Jiva Ayurveda</a></li>
            <li><a className="dropdown-item" href="#">Cough, Cold & Fever
Sexual Wellness</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavlightDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarlightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Health Resource Center
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarlightDropdownMenuLink">
            <li><a className="dropdown-item" href="#">All Diseases</a></li>
            <li><a className="dropdown-item" href="#">All Medicines</a></li>
            
          </ul>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavlightDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarlightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Vitamins & Nutrition
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarlightDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Vitamins & Nutrition </a></li>
            <li><a className="dropdown-item" href="#">Vitamins & Nutrition</a></li>
            <li><a className="dropdown-item" href="#">Mass Gainers</a></li>
            <li><a className="dropdown-item" href="#">Chyawanprasha</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavlightDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarlightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Diabetes
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarlightDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Juices & Vinegars</a></li>
            <li><a className="dropdown-item" href="#">Test Strips & Lancets</a></li>
            <li><a className="dropdown-item" href="#">Vitamins, Minerals & Antioxidants</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavlightDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarlightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Healthcare Devices
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarlightDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Surgical Masks</a></li>
            <li><a className="dropdown-item" href="#">Ankle & Foot Support</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavlightDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarlightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={personalClick}>
          Personal Care
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarlightDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Body Lotions</a></li>
            <li><a className="dropdown-item" href="#">Baby Bath Essentials</a></li>
            <li><a className="dropdown-item" href="#">Baby Bath Essentials</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavlightDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarlightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Health Conditions
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarlightDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Health Conditions</a></li>
            <li><a className="dropdown-item" href="#">Health Conditions</a></li>
            <li><a className="dropdown-item" href="#">Kidney Care</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default InNav
