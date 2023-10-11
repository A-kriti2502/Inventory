import React from 'react';
import waveImage from '../../assest/waveImage.svg';
import manImage from '../../assest/manImage.svg';
import navLogo from '../../assest/Logo.svg';
import './Welcome.scss';
import '../../styles/global.css';

const Home = () => {
  return (
    <div className='home'>
        <div className="NavLogo">
            <img className='logo' src={navLogo} alt="Logo" />
        </div>
        <div className='main'>
            <div className='main-content'>
                <h1 className='FiraSans'>Welcome</h1>
                <p className='montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet, exercitationem dicta ut cum quisquam recusandae totam 
                    accusamus, rem voluptate, qui nobis autem impedit incidunt 
                    dolorem sed libero quam repellat molestias.</p>
            </div>
            <div className='main-button'>
                <button className='loginButton'>Login With Microsoft</button>
            </div>
        </div>
        <div className='image-container'>
            
            <img className='wave' src={waveImage} alt='Wave'/>
            <img className='man' src={manImage} alt='man'/>
        
        </div>
    </div>
  )
}
export default Home
