import React from 'react'
import '../styles/Venues.css'
import Navbar from './Navbar'
const Venues = () => {
  return (
    <div>
        <Navbar/>
        <div className="venuespage">
        <div className="venuespageheading">
            <h2>Venues of IPL2024</h2>
            <p>The Indian Premier League IPL is back for another thrilling season, 
                bringing together the best of cricket talent from around the globe. 
                IPL 2024 is set to unfold across several iconic venues in India, 
                each with its own rich history and vibrant atmosphere. 
                Join us as we take a closer look at the stadiums that will host the 
                electrifying matches of IPL 2024.
            </p>
        </div>
      <div className="venuetable">
        <table>
            <tr>
                <th>Stadium Name</th>
                <th>HomeGround of IPL Team</th>
                <th>Location</th>
            </tr>
            <tr>
                <td><h3>Wankhede Stadium, Mumbai</h3>
                    <p>Situated in the heart of Mumbai, 
                    the Wankhede Stadium is renowned for its electric atmosphere and passionate crowds.
                    As the scene of numerous historic matches, including the unforgettable 2011 World Cup Final, 
                    Wankhede promises to deliver some of the most exciting moments in IPL 2024. With a seating capacity
                    of over 33,000, it offers a spectacular view of the action, ensuring an unforgettable experience for 
                    cricket fans.</p>
                </td>
                <td>Mumbai Indians</td>
                <td><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.831345970451!2d72.8231890753649!3d18.938857856263198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e0f0a26a81%3A0x87d6e47e04df3916!2sWankhede%20Stadium!5e0!3m2!1sen!2sin!4v1712906228947!5m2!1sen!2sin"
                    title='Wankhade Stadium Map'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>M.A.Chidambaram Stadium, Chennai</h3>
                    <p>Home to passionate cricket fans, 
                       the M. Chinnaswamy Stadium is famous for its lively atmosphere and modern facilities. 
                       Nestled in the heart of Bangalore, it is a favorite among players and spectators alike 
                       for its high-scoring matches, thanks to its batting-friendly pitch. IPL 2024 will see 
                       the stadium come alive as fans from across the country gather to cheer for their favorite 
                       teams.</p>
                </td>
                <td>Chennai Super Kings</td>
                <td><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.574980644911!2d80.27673517527191!3d13.062703712873928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5268a0db9f748d%3A0x445b3afd24586ce5!2sM.%20A.%20Chidambaram%20Stadium!5e0!3m2!1sen!2sin!4v1712908705326!5m2!1sen!2sin"
                    title='M.A.Chidambaram Stadium'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>Eden Gardens, Kolkata</h3>
                    <p>Known as one of the largest cricket stadiums in India, 
                    Eden Gardens is a cricketing arena with a soul. 
                    It has witnessed numerous dramatic matches since its inception in 1864, 
                    making it a site of pilgrimage for cricket enthusiasts. 
                    As IPL 2024 gears up to bring action-packed matches to Kolkata, 
                    fans can expect a blend of great cricket and rich history at Eden Gardens.</p>
                </td>
                <td>Kolkata Knight Riders</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3873110695436!2d88.34068957544322!3d22.56461303326284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779ff7e5b9af%3A0x1d1b1884bdbbbd79!2sEden%20Gardens!5e0!3m2!1sen!2sin!4v1712909599130!5m2!1sen!2sin"
                    title='Eden Gardens'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>Rajiv Gandhi International Cricket Stadium, Hyderabad</h3>
                    <p>Known for its modern facilities and impressive crowd management holds the capacity of 55000, 
                    the Rajiv Gandhi International Stadium provides a balanced pitch that offers something for both 
                    batsmen and bowlers, making every match a gripping contest.</p>
                </td>
                <td>Sun Risers Hyderabad</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1095131627408!2d78.54789547533653!3d17.40653130225299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9938ea05531b%3A0xcc8b7a858c63d5bb!2sRajiv%20Gandhi%20International%20Cricket%20Stadium%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1712909979158!5m2!1sen!2sin"
                    title='Rajiv Gandhi International Cricket Stadium, Hyderabad'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>Sawai Mansingh Stadium, Jaipur</h3>
                    <p>This stadium is renowned for its royal charm and enthusiastic crowd. 
                        It offers a pitch that generally aids batsmen but has historically also provided 
                        some help to the spinners, making it a balanced cricketing venue.</p>
                </td>
                <td>Rajasthan Royals</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.299413580277!2d75.80077437555722!3d26.893991160894625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db421e6543edf%3A0x839485b974fe18fb!2sSawai%20Mansingh%20Stadium!5e0!3m2!1sen!2sin!4v1712910235320!5m2!1sen!2sin"
                    title='Sawai Mansingh Stadium'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>Narendra Modi Stadium, Ahmedabad</h3>
                    <p> As the largest cricket stadium in the world, 
                        Narendra Modi Stadium offers a breathtaking spectacle for attendees. 
                        With top-tier facilities and a pitch that caters to competitive cricket, 
                        it's a venue that stands out in every cricket tournament.</p>
                </td>
                <td>Gujarat Titans</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29366.332723347714!2d72.55994913556682!3d23.068101049355295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c17dc37ee3%3A0xab976f6a3a1f932d!2sNarendra%20Modi%20Stadium!5e0!3m2!1sen!2sin!4v1712910397453!5m2!1sen!2sin"
                    title='Gujarat Titans'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>M. Chinnaswamy Stadium, Bangalore</h3>
                    <p> Situated in the heart of the IT capital of India, Bangalore, 
                        the M. Chinnaswamy Stadium is a favorite among both players and spectators for its lively atmosphere 
                        and modern amenities. Known for its batting-friendly pitch and smaller boundaries, 
                        this venue often results in high-scoring thrillers.</p>
                </td>
                <td>Royal Challengers Bengaluru</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.891073197182!2d77.5970815752709!3d12.978818214719574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1664d3619b53%3A0xc13769784709aec!2sM.%20Chinnaswamy%20Stadium!5e0!3m2!1sen!2sin!4v1712910558288!5m2!1sen!2sin"
                    title='M. Chinnaswamy Stadium'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow</h3>
                    <p> Ekana Cricket Stadium, formally known as the Bharat Ratna Shri Atal Bihari Vajpayee Ekana 
                        Cricket Stadium, is one of the newest additions to India's list of international cricket 
                        venues. Located in the vibrant city of Lucknow, Uttar Pradesh, this stadium boasts a 
                        seating capacity of around 50,000, making it one of the largest in the state.</p>
                </td>
                <td>Lucknow Supergiants</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.8991207123822!2d81.01278127555477!3d26.811340564439448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd2bac906e41%3A0x459447007d8ed7fa!2sEkana%20Sports%20City%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1712910881404!5m2!1sen!2sin" 
                    title='Ekana Cricket Stadium'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>Arun Jaitley Stadium, Delhi</h3>
                    <p> Arun Jaitley Stadium, formerly known as Feroz Shah Kotla Stadium, 
                        holds a distinguished place in the heart of Delhi, 
                        serving as a historic venue for many pivotal cricket matches. 
                        With a seating capacity of around 41,820, it stands as one of the 
                        oldest cricket stadiums in India, having been established in 1883.</p>
                </td>
                <td>Delhi Capitals</td>
                <td><iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7275141222694!2d77.24059857560925!3d28.637927683835525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcd82caa5747%3A0x9eb7b9e749e5e743!2sArun%20Jaitley%20Stadium%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1712911170409!5m2!1sen!2sin"
                    title='Arun Jaitley Stadium, Delhi'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
            <tr>
                <td><h3>Mahrajra Yadavindra Singh Cricket Stadium, Mullanpur,Chandigarh</h3>
                    <p> The Maharaja Yadavindra Singh Cricket Stadium, commonly referred to as 
                        the Mullanpur Stadium or Punjab Cricket Association IS Bindra Stadium, 
                        is one of the newer and more modern cricket stadiums in India. Located 
                        near Chandigarh in Mullanpur, Punjab, this venue is designed to provide
                        an international cricketing experience with state-of-the-art facilities 
                        and a spectator-friendly environment.</p>
                </td>
                <td>Punjab Kings</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.84409392487!2d76.72111477567786!3d30.778954883397173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff1f25f035f87%3A0x1d865a054a19ea1d!2sMaharaja%20Yadavindra%20Singh%20Cricket%20Stadium!5e0!3m2!1sen!2sin!4v1712911394703!5m2!1sen!2sin"
                    title='Mahrajra Yadavindra Singh Cricket Stadium, Mullanpur (Chandigarh)'
                    className='map'
                    style={{ border:0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </td>
            </tr>
        </table>
      </div>
        </div>
    </div>
  )
}

export default Venues
