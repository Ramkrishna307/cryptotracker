import React from 'react'
import './style.css';
import Button from '../../Common/Button';
import phone1 from'../../../assets/phone1.png'
import gradient1 from'../../../assets/gradient1.png'
import { motion } from 'framer-motion';
const MainComponent = () => {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 className='track-crypto-heading'
            initial={{opacity:0, y:50}}
            animate={{opacity:1,y:0}}
            transition={{transition:0.7,delay:0.6}}>
            Track Crypto
            </motion.h1>

            <motion.h1 className='real-time-heading'
            initial={{opacity:0, y:50}}
            animate={{opacity:1,y:0}}
            transition={{transition:0.7,delay:0.7,type:"smooth"}}>
            Real Time.
            </motion.h1>

            <motion.p className='info-text'
              initial={{opacity:0, y:50}}
              animate={{opacity:1,y:0}}
              transition={{transition:0.7,delay:0.7,type:"smooth"}}>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
           
           <motion.div className='btn-flex'
             initial={{opacity:0, x:50}}
             animate={{opacity:1,x:0}}
             transition={{transition:0.7,delay:1.5,type:"smooth"}}>
                <Button text={"Dashboard"} outlined={false}/>
                <Button text={"Share"} outlined={true}/>
            </motion.div>

        </div>
        <div className='phone-container'>
             <motion.img src={phone1} className='phone'
               initial={{ y:-10}}
               animate={{ y:0}}
               transition={{
                
                type:"smooth",
                duration:2,
                repeatType:'mirror',
                repeat:Infinity,
              }}/>
            <motion.img src={gradient1} className='gradient'
              initial={{ y:-10}}
              animate={{ y:0}}
              transition={{
                type:"smooth",
                duration:2,
                repeatType:'mirror',
                repeat:Infinity,
              }}/> 

        </div>

    </div>
  )
}

export default MainComponent