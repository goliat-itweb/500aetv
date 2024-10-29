import React from 'react';
import Match from './match/Match';
import Community from './community/Community'
import './Homepage.css';

const HomePage = () => {
   return (
      <div className='homepage pb-5 '>
         <div className=''>
            <div >
               <Match />
               <Community />
            </div>
         </div>
      </div>
   );
}

export default HomePage; 
