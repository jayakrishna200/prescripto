import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import {DoctorContext} from "./context/DoctorContext"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsLst from './pages/Admin/DoctorsList';
import DoctorDashboard from "./pages/Doctor/DoctorDashboard"
import DoctorProfile from "./pages/Doctor/DoctorProfile"
import DoctorAppointment from "./pages/Doctor/DoctorAppointment"

const App = () => {
  const { aToken } = useContext(AdminContext);
  const {dToken}=useContext(DoctorContext);
  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar/>
      <div className="flex items-start">
        <Sidebar/>
        <Routes>
          {/*---Admin Route ---*/}
          <Route path="/" element={<></>}/>
          <Route path="/admin-dashboard" element={<Dashboard/>}/>
          <Route path="/all-appointments" element={<AllAppointments/>}/>
          <Route path="/add-doctor" element={<AddDoctor/>}/>
          <Route path="/doctors-list" element={<DoctorsLst/>} />
          {/*---Doctor Route ---*/}
          <Route path="/doctor-dashboard" element={<DoctorDashboard/>} />
          <Route path="/doctor-appointments" element={<DoctorAppointment/>} />
          <Route path="/doctor-profile" element={<DoctorProfile/>} />
        
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
