import React from 'react'
import { teamlogos } from '../data/TeamLogos';
import { Link } from 'react-router-dom';
import '../styles/Teams1.css'
import Navbar from './Navbar';
const Teams1 = () => {
    const logos = teamlogos;
  return (
    <>
    <Navbar/>
    <div className='teamscontainer'>
        
     {
        logos.map((item )=>{
            return(
                
                <div className='teamscard' key={item.TeamCode}>
                    
                <Link to = {`/teams/${item.TeamCode}`} className='linkStyle'>
                    
                        <div className='teamlogo'>
                            <img src={item.logo} alt="" />
                        </div>
                        <div className='teamDetails'>
                            <h3>{item.Name}</h3>
                            <h2>{item.TeamCode}</h2>
                            <span>{item.teamStats}</span>
                            <p>{item.champions}</p>
                        </div>
                    
                     </Link>
                </div>
                
            )
        })
     } 
    </div>
    </>
  )
}

export default Teams1
