import React from 'react'
import Navbar from './Navbar'
import '../styles/Schedule.css'
const Schedule = () => {
  return (
    <div>
        <Navbar/>
        <div className="scheduleContainer">
            <img src='/assets/ipl schedule-images-1.jpg' alt='ipl schedule page 1'/>
            <img src='/assets/ipl schedule-images-2.jpg' alt='ipl schedule page 2'/>
        </div>
        
    </div>
  )
}

export default Schedule
