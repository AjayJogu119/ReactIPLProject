import React from 'react'
import '../styles/Home.css'
import { iplseasons } from '../data/IplAllSeasons'
const Home = () => {
  const seasoninfo = iplseasons;
  return (
    <div className='homecontainer'>
      <div className="iplinfo">
        <p>The Indian Premier League is a professional Twenty20 cricket league in India, 
          contested during March or April and May of every year by teams representing 
          different cities or regions of India. The league was founded by the Board of Control 
          for Cricket in India in 2008.<br/>
          The tournament format has generally consisted of a double round-robin group stage, 
          followed by playoffs including the top four teams. 
          The playoffs consist of two qualifiers, one eliminator, and the final.
        </p>
      </div>
      <div className="iplseasons">
        <h3>IPL All Seasons Information</h3>
        <div className="seasoncardcontainer">
        {
          seasoninfo.map((item)=>{
           return(
            <div className='seasoncard'>
              <h2>{item.season}</h2>
              <p className='winner'>Winner - {item.Winner}</p>
              <p className='runner'>Runner - {item.Runner}</p>
              <p className='mvp'>Most Valuable Player - {item.MostvaluablePlayer}</p>
              <p className='orange'>Orange Cap - {item.orangeCap}</p>
              <p className='purple'>Purple Cap - {item.purpleCap}</p>
            </div>
           )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Home
