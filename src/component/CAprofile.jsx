import React from 'react';
import { useParams } from 'react-router-dom';

function CAprofile({ error, CAData })
{if (!CAData || CAData.length === 0) {
  return <p>No data available</p>;
}

  const { id } = useParams();
  const ca = CAData.find((item) => item.id === id);
  if (!ca) {
    return <p>Profile not found</p>;
  }
  return(
    <div className="ca-list">
        {error && <p>{error}</p>}
        {CAData.map((ca, index) => (
          <div key={index} className="ca-card">
          <img src={ca.image} alt={ca.name} />
            <h3>{ca.name}</h3>
            <div className='about'>
              <h3><b>From</b><span>{ca.from}</span></h3>
              <h3><b>Partner Since</b><span>{ca.partnerSinc}</span></h3>
              <h3><b>Average Response Time</b><span>{ca.averageResponseTime}</span></h3>
            </div>
            <p><b>About</b>: <br/>I am a Professional Charted Accountant here to offer professional services of {ca.description}</p>
            <div className='servicesList'>
            <ul className="w-96">
               <li
                  className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                   Serices I Offer
                   <ul className="w-96">
               <li
                  className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                   {ca.services}
               </li>
             </ul>
               </li>
             </ul>
             <ul className="w-96">
               <li
                  className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                   Why me?
                   <ul className="w-96">
               <li
                  className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                   {ca.benefits}
               </li>
             </ul>
               </li>
             </ul>
            </div>
          </div>
          
        ))}
        
      </div>
    

  );
}export default CAprofile