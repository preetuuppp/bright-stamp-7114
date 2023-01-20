import React from 'react'
import { FaSistrix } from "react-icons/fa";
const Search = () => {
  return (
    <div >
        <div className="input-group input-group-sm mb-3"  >
  <span className="input-group-text" id="inputGroup-sizing-sm">{<FaSistrix/>}</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Search for Medicines and HealthCare'/>
</div>
      {/* <input style={{margin:'10px',borderRadious:'5px',border:'2px solid whiteSmoke'}} type="text" placeholder='Search for Medicines and HealthCare' />  */}
    </div>
  )
}

export default Search
