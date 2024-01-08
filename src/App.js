import React from 'react';
import './App.css';
import { UserGrid } from './components/user_module/UserGrid';
import { Routes, Route } from 'react-router-dom';
import MasterUser from './shared/MasterUser';
import FormEditModal from './components/user_module/FormEditModal';
import Header from './components/Header';
// import MasterAuction from "./components/Modal/MasterModalForm"
// import DataGridDemo from './components/MyOwnFolder/MasterTable';
import MasterTableFilter from './components/MyOwnFolder/shared/GlobalFilterSearch';
import MasterTable from './components/MyOwnFolder/MasterTable';
// import MasterUserForm from './components/Modal/MasterModalForm';
import MasterAddForm from './components/MyOwnFolder/MasterAddForm';
import MasterEditForm from './components/MyOwnFolder/MasterEditForm';
import MasterModalForm from './components/MyOwnFolder/Modal/MasterModalForm';

function App() {
  return (
    <>
    {/* <MasterUser/> */}
    {/* <MasterAuction/> */}
    {/* <UserGrid/> */}
    {/* <DataGridProDemo/> */}                    

    {/* <Header/> */}
    {/* <MasterTableFilter/> */}                 
    {/* <MasterEditForm/> */}
    <Routes>
      <Route path='usergrid' element={<UserGrid />} />
      <Route path='formeditmodal' element={<FormEditModal /> } />
      <Route path='masteruser' element={<MasterUser /> } />                                                                                                 
      <Route path='masteraddAuction' element={<MasterAddForm /> } />                                                                                                 
      <Route path='mastereditAuction' element={<MasterEditForm /> } />                                                                                                 
      <Route path='mastermodalForm' element={<MasterModalForm /> } />                                                                                                 
      <Route path='masterAuctionTable' element={<MasterTable/> } />
      {/* <Route path='tableFilter' element={<MasterTableFilter /> } /> */}
    </Routes>  
    </>
    );
}

export default App;
