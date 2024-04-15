import React from 'react'
import Navbar from './Navbar'
import '../styles/Stats.css'
const Stats = () => {
  return (
    <div className='statspage'>
      <Navbar/>
      <div className="tableContainer">
        <h2>Points Table</h2>
        <img src='public/assets/PointsTable.png' alt='points table'/>
      </div>
      <div className="highestTable">
        <h2>Most Runs</h2>
        <table>
            <tr>
                <th>S.no</th>
                <th>Player</th>
                <th>Matches</th>
                <th>Innings</th>
                <th>Runs</th>
                <th>Best</th>
                <th>Average</th>
                <th>Strike Rate</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Virat Kohli</td>
                <td>6</td>
                <td>6</td>
                <td>319</td>
                <td>113</td>
                <td>79.75</td>
                <td>141.77</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Riyan Parag</td>
                <td>5</td>
                <td>5</td>
                <td>261</td>
                <td>84</td>
                <td>87.00</td>
                <td>158.18</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Shubman Gill</td>
                <td>6</td>
                <td>6</td>
                <td>255</td>
                <td>89</td>
                <td>51.00</td>
                <td>151.77</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Sanju Samson</td>
                <td>5</td>
                <td>5</td>
                <td>246</td>
                <td>82</td>
                <td>82.00</td>
                <td>157.69</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Sai Sudarshan</td>
                <td>6</td>
                <td>6</td>
                <td>226</td>
                <td>45</td>
                <td>37.67</td>
                <td>127.68</td>
            </tr>
            
        </table>
      </div>
      <div className="highestTable">
        <h2>Most Wickets</h2>
        <table>
            <tr>
                <th>S.no</th>
                <th>Player</th>
                <th>Matches</th>
                <th>Innings</th>
                <th>Wickets</th>
                <th>Best</th>
                <th>Economy</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Jasprit Bumrah</td>
                <td>5</td>
                <td>5</td>
                <td>10</td>
                <td>21/5</td>
                <td>5.95</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Yuzvendra Chahal</td>
                <td>5</td>
                <td>5</td>
                <td>10</td>
                <td>11/3</td>
                <td>7.33</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Mustafizur Rehman</td>
                <td>4</td>
                <td>4</td>
                <td>9</td>
                <td>29/4</td>
                <td>8.00</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Arshdeep Singh</td>
                <td>5</td>
                <td>5</td>
                <td>8</td>
                <td>29/4</td>
                <td>8.72</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Mohit Sharma</td>
                <td>6</td>
                <td>6</td>
                <td>8</td>
                <td>25/3</td>
                <td>9.39</td>
            </tr>
            
        </table>
      </div>
    </div>
  )
}

export default Stats
