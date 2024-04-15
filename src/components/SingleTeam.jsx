import React from 'react'
import { useParams } from 'react-router-dom'
import { players } from '../data/IplPlayers'
import Navbar from './Navbar'
import AllTeams from './AllTeams'
const SingleTeam = () => {
    const {TeamCode} = useParams()
    const teamPlayers = players.filter((player) => player.TeamCode === TeamCode);
    
    if (teamPlayers.length === 0)
    {
        return (
            <div>
                <Navbar/>
                <AllTeams/>
                No players found for this team
            </div>
        );
    }

    return (
        
        <div>
            <Navbar/>
            <AllTeams/>
            <h2 className='teamplayers'>Players of Team {TeamCode}</h2>
            <div className='playercontainer'>
                {
                        teamPlayers.map((player) => (
                            <div key={player.Name} className='playercard'>
                                <div className="playerimage">
                                    <img src={player.image} alt={player.Name} />
                                </div>
                                <div className="playerdetails">
                                    <p className='playername'>{player.Name}</p>
                                    <p className='playerspecification'>{player.specification}</p>
                                    <img src={player.specificationLogo} alt="" className='playerspecificationlogo' />
                                    {
                                        player.foreignplayer && <img className='foreignlogo' src={player.foreignplayer} alt=''/>
                                    }
                                    {
                                        player.Rolelogo && <p className='rolelogo'>{player.Rolelogo}</p>
                                    }
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    );
}

export default SingleTeam
