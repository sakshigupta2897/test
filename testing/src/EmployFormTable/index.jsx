import React from 'react'
import './tableStyle.css'
import { useState } from "react";

const EmployTable = ({employData}) => {
    const [search, setSearch] = useState('');
    const handleSearch = () => {
        employData?.filter((item)=>item.name.includes(search))
      };
  return (

    <>
    <div className="search_bar">
        <input type="text" value={search} placeholder="search" onChange={(e)=>{setSearch(e.target.value)}} />
        <button className="submit_btn" onClick={handleSearch} >
          Search
        </button>
      </div>
      <div className='employ_table'>
           <table cellPadding='10' cellSpacing='2'>
       <tr>
           <th>S.No.</th>
           <th>Name</th>
           <th>Age</th>
           <th>Salary</th>
           <th>Picture</th>
       </tr>
       {employData
       ?.filter((item)=>item?.name?.includes(search))
       ?.map((item,i)=>{
           console.log(item?.name,'name')
           return(
            <tr>
            <td key={i}>{i+1}</td>
            <td>{item?.name}</td>
            <td>{item?.age}</td>
            <td>{item?.salary}</td>
            <td>{item?.picture}</td>
 
        </tr>
           )
       })}
       
   </table>
      </div>
    </>
     
  
  )
}

export default EmployTable