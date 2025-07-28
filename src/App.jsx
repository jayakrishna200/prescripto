import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Doctors from './pages/Doctors.jsx'
import Login  from './pages/Login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Appointment from './pages/Appointment.jsx'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/doctors' element={<Doctors/>} />
      <Route exact path='/doctors/:speciality' element={<Doctors/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/my-appointments' element={<MyAppointments/>} />
      <Route exact path='/my-profile' element={<MyProfile/>} />
      <Route exact path='/appointment/:doctorId' element={<Appointment/>} />
      {/* Catch-all route for 404 Not Found */}
      <Route path='*' element={<h1 className='text-3xl text-red-500'>404 Not Found</h1>} />
     </Routes>
    </div>
  )
}

export default App