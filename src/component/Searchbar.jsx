import React from 'react';
import { TERipple } from 'tw-elements-react';


export default function Searchbar({ setSearchQuery }) {
    
  const handleInputChange = (e) => {
    // Update the searchQuery state in the parent component
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-3 md:w-96">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
  type="search"
  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
  placeholder="Search"
  aria-label="Search"
  aria-describedby="button-addon1"
  onChange={handleInputChange}
/>

        <TERipple color="light">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            id="button-addon1"
          >
            Search
          </button>
        </TERipple>
      </div>
    </div>
  );
}
