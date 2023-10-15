import React, { useState, useEffect } from 'react';
import { FcCalendar } from 'react-icons/fc'
import { TbStarsFilled } from 'react-icons/tb'
import { TERipple } from "tw-elements-react";
import { NavLink } from 'react-router-dom'


function ResultC() {
  const [searchInput, setSearchInput] = useState('');
  const [CAData, setCAData] = useState([]);
  const [error, setError] = useState(null);

  const fetchCa = async (name) => {
    try {
      const apiUrl = `http://127.0.0.1:3800/chartedacc/search?name=${name}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCAData(data);
      setError(null); // Reset any previous errors
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCa(searchInput);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="search-container">
    <input
      type="search"
      className="rounded-md rounded-l px-3 py-2 border border-solid border-neutral-300 bg-transparent focus:outline-none focus:ring focus:border-primary dark:placeholder-neutral-200 dark:focus:border-primary"
      placeholder="Search by name"
      aria-label="Search"
      aria-describedby="button-addon1"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      style={{ width: '400px', height:'50px' }} 
    />

    <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" style={{ width: '200px', height:'50px' }}>
      Search
    </button>
  </div>
</form>


      {error && <p>{error}</p>}
        {CAData.map((ca, index) => (
          <div key={index} className="ca-card">
          
  <h2 className='mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
   <NavLink to={`/ca-profile/${ca.id}`}>{ca.name}</NavLink> 
  </h2>

  
          <p className="font-sans ...  text-xl">
            I am here to provide my {ca.intro}
          </p>
          <h3 ><span className='text-blue-600 text-xl'><TbStarsFilled/><b>{ca.rating}</b></span> ({ca.reviewCount})</h3>

      <div className="ca-list block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        
            
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
            {ca.taskComplexity}</h5><h3><b>{ca.price}</b></h3>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'> {ca.deliveryTime}<span><FcCalendar/></span></p><br/>

            <TERipple rippleColor="light">
  <button
    type="button"
    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    data-te-ripple-init
    data-te-ripple-color="light"
  >
    Request Proposal
  </button>
  <button
    type="button"
    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    data-te-ripple-init
    data-te-ripple-color="light"
  >
    Chat with me
  </button>
</TERipple>


          </div>
        
      </div>
      ))}
    </div>
  );
}

export default ResultC;

  