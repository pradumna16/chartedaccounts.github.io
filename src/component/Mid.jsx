import React from 'react';
import ResultC from './ResultC';
import lap from '../assets/image/lap.png';
import Meetings from '../assets/image/Meetings.png';
import Study from '../assets/image/Study.png';

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find <b className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>Partner</b> (CA<small>S</small>) available online
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <b>CONNECT</b> with us where your services are listed and visible to a myriad of businesses seeking CA's compliance support
            </p>
            <div className="mt-6">
              <ResultC />
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center items-center">
            <div className="image-item">
              <img
                src={lap}
                alt="lap"
                className="h-auto max-w-xs rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              />
            </div>
            <div className="image-item">
              <img
                src={Meetings}
                alt="Meetings"
                className="h-auto max-w-xs rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              />
            </div>
            <div className="image-item">
              <img
                src={Study}
                alt="Study"
                className="h-auto max-w-xs rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
