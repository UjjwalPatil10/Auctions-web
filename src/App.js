import React from 'react';
import './App.css';
import { UserGrid } from './components/user_module/UserGrid';
import { Routes, Route } from 'react-router-dom';
import MasterUser from './shared/MasterUser';
import FormEditModal from './components/user_module/FormEditModal';
import Header from './components/Header';
import MasterAuction from "./components/Modal/Master"

function App() {
  return (
    <>
    {/* <MasterUser/> */}
    {/* <MasterAuction/> */}
    {/* <UserGrid/> */}
    <Header/>
    <Routes>

      <Route path='formeditmodal' element={<FormEditModal /> } />
      <Route path='usergrid' element={<UserGrid />} />
      <Route path='masteruser' element={<MasterUser /> } />

    </Routes>  
    </>
    );
}

export default App;
