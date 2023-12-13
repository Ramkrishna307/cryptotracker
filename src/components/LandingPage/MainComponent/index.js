import React from 'react'
import './style.css';
import Button from '../../Common/Button';
import phone1 from'../../../assets/phone1.png'
import gradient1 from'../../../assets/gradient1.png'
const MainComponent = () => {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <h1 className='track-crypto-heading'>
            Track Crypto
            </h1>
            <h1 className='real-time-heading'>
            Real Time.
            </h1>
            <p className='info-text'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
            <div className='btn-flex'>
                <Button text={"Dashboard"} outlined={false}/>
                <Button text={"Share"} outlined={true}/>
            </div>
        </div>
        <div className='phone-container'>
             <img src={phone1} className='phone'/>
            <img src={gradient1} className='gradient'/> 

        </div>

    </div>
  )
}

export default MainComponent