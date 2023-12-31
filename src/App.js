
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './Component/Pages/Home/Home'; 
import NotFoundPage from './Component/Pages/NotFoundPage/NotFoundPage';
import Header from './Component/Pages/Header/Header';
import Test from './Component/Pages/Test/Test';
import Profile from './Component/Pages/Profiile/Profile';
import Dashboard from './Component/Pages/Dashboard/Dashboard';
import AddAgent from './Component/Pages/Form/AddAgent/AddAgent';
import Mystaff from './Component/Pages/Report/Mystaff/Mystaff';
import Userreport from './Component/Pages/Report/Userreport/Userreport';
import Test2 from './Component/Pages/Test/Test2';
import Login from './Component/Pages/Authinticate/Login/Login';
import AddStaff from './Component/Pages/Form/AddStaff/AddStaff';
import Myagent from './Component/Pages/Report/Myagent/Myagent';
import AgentligalReport from './Component/Pages/Report/AgentlegalReport/AgentlegalReport';

function App() {
 
  return (
    <div className="App"> 
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Test />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}> 
          <Route index element={<Profile/>}></Route>
          <Route path="/dashboard/1" element={<div>bangladesh</div>}></Route>
          <Route path="/dashboard/2" element={<div>indiaa</div>} />
          <Route path="/dashboard/3" element={<Userreport/>} />
          <Route path="/dashboard/mystaff" element={<Mystaff/>} />  
          <Route path="/dashboard/addstaff" element={<AddStaff/>} />  
          <Route path="/dashboard/addagent" element={<AddAgent/>} />  
          <Route path="/dashboard/myagent" element={<Myagent/>} />   
          <Route path="/dashboard/agent-legal-report/v1" element={<AgentligalReport/>} />    
        </Route>
        


        <Route path='*' element={<NotFoundPage></NotFoundPage>}>not found</Route>
       </Routes>
    </div>
  );
}

export default App; 
 