import './App.css';
import EmployForm from './EmployForm';
import EmployTable from './EmployFormTable';
import { useState } from "react";

function App() {
  const [employData, setEmployData] = useState();
  return (
    <div>
      <EmployForm 
      employData={employData}
      setEmployData={setEmployData}
      />
      <EmployTable
       employData={employData}/>
    </div>
  );
}

export default App;
