import './App.css';
import EmployForm from './EmployForm';
import EmployTable from './EmployFormTable';
import { useState, useEffect } from "react";

function App() {
  const [employData, setEmployData] = useState();
  useEffect(()=>{
    if(!localStorage.getItem('data')) return
    setEmployData(JSON.parse(localStorage.getItem('data')))
  },[])
  return (
    <div>
      <EmployForm 
      employData={employData}
      setEmployData={setEmployData}
      />
      <EmployTable
       employData={employData}
      //  search={search}
       />
    </div>
  );
}

export default App;
