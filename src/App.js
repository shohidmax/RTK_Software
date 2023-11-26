
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './Component/Pages/Home/Home'; 
import NotFoundPage from './Component/Pages/NotFoundPage/NotFoundPage';
import Header from './Component/Pages/Header/Header';
import Test from './Component/Pages/Test/Test';
import Profile from './Component/Pages/Profiile/Profile';
import Dashboard from './Component/Pages/Dashboard/Dashboard';

function App() {
 
  return (
    <div className="App"> 
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Login" element={<Test />} />
        <Route path="/signup" element={<Test />} />
        <Route path="/test" element={<Test />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}> 
          <Route index element={<Profile/>}></Route>
          <Route path="/dashboard/1" element={<div>bangladesh</div>}></Route>
          <Route path="/dashboard/qr" element={<div>indiaa</div>} />
          <Route path="/dashboard/barcode" element={<div>rolex</div>} />
          <Route path="/dashboard/rpt" element={<div>qutex</div>} />  
        </Route>
        


        <Route path='*' element={<NotFoundPage></NotFoundPage>}>not found</Route>
       </Routes>
    </div>
  );
}

export default App; 
 