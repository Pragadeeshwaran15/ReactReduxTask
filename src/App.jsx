import React from 'react'
import Cards from './component/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from './contextData/UserContext';


function App() {
  
  return <div className="container-fluid my-5">
      
      <UserContext>
      <Cards/>
      </UserContext>
   
      
     
            
         </div>
   
}

export default App
