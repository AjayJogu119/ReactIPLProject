import React from 'react'
import { teamlogos } from '../data/TeamLogos';
import { Link } from 'react-router-dom';
import '../styles/AllTeams.css'
const AllTeams = () => {
    const logos = teamlogos;
    
    return (
      <div className='allteamscontainer'>
       {
          logos.map((item )=>{
              return(
                  <div className='allteamscard' key={item.TeamCode} >
                  <Link to = {`/teams/${item.TeamCode}`} className='linkStyle'>
                        <img src={item.logo} alt="" />
                   </Link>
                  </div>    
              )
          })
       } 
      </div>
    )
  }
  

export default AllTeams
