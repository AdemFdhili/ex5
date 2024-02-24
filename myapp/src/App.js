import React from 'react';
import Category from './Component/Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons'; 
import { faBrain } from '@fortawesome/free-solid-svg-icons'; 
import { faMessage } from '@fortawesome/free-solid-svg-icons'; 
import { faEye } from '@fortawesome/free-solid-svg-icons'; 
import './App.css';

function App() {
  return (
    <div className='widget'>
      <>
        <div className='left-part'>
          <h3>Your Result</h3>
          <div className='circle-container'>
            <div className='circle'>
              <span className='big-number'>76</span>
              <span className='small-text'>of 100</span>
            </div>
          </div>
          <h1>Great</h1>
          <p className="review">
            You scored higher than 65% of the people who have
            taken these tests
          </p>
        </div>
        <div className='right-part'>
          <h2>Summary</h2>

          <Category icon={<FontAwesomeIcon icon={faBolt} style={{color: "#f2a3ac"}} />} value1={"Reaction"} value2={"80/100"} bgcolor={"#fff6f4"} txtcolor={"#f2a3ac"} bgborder={"none"} />
          <Category icon={<FontAwesomeIcon icon={faBrain} style={{color: "#f7e4a1"}} />} value1={"Memory"} value2={"92/100"} bgcolor={"#fffcef"} txtcolor={"#f6e4a1"} bgborder={"none"} />
          <Category icon={<FontAwesomeIcon icon={faMessage} style={{color: "#81cdba"}} />} value1={"Verbal"} value2={"71/100"} bgcolor={"#f2fbfa"} txtcolor={"#81cdba"} bgborder={"none"} />
          <Category icon={<FontAwesomeIcon icon={faEye} style={{color: "#8891ca"}} />} value1={"Visual"} value2={"62/100"} bgcolor={"#f3f3ff"} txtcolor={"#888ec7"} bgborder={"none"} />
          <button>Continue</button>
        </div>
      </>
    </div>
  );
}

export default App;
