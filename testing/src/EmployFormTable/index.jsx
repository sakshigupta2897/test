import React from 'react'
import './tableStyle.css'

const EmployTable = ({employData}) => {
  return (
      <div className='employ_table'>
           <table cellPadding='10' cellSpacing='2'>
       <tr>
           <th>S.No.</th>
           <th>Name</th>
           <th>Age</th>
           <th>Salary</th>
           <th>Picture</th>
       </tr>
       {employData?.map((item,i)=>{
           return(
            <tr>
                <td key={i}>{i+1}</td>
            <td>{item?.name}</td>
            <td>{item?.age}</td>
            <td>{item?.salary}</td>
            <td>{item?.image}</td>
 
        </tr>
           )
       })}
       
   </table>
      </div>
  
  )
}

export default EmployTable