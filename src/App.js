import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (languages) {
      tags.push(...languages);
    }

    if (tools) {
      tags.push(...tools);
    }

    return tags.some((tag) => filters.includes(tag));
    // return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    //prevent duplicated selection on same tag
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const filteredjobs = jobs.filter(filterFunc);

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img
          className="w-full"
          src="/images/bg-header-desktop.svg"
          alt="bg-img"
        />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="flex bg-white shadow-md -my-20 mb-16 mx-10 p-4 rounded z-10 relative">
            {filters.map((filter) => (
              <span
                key={filter}
                className="cursor-pointer mr-4 my-4 rounded font-bold"
                onClick={() => handleFilterClick(filter)}
              >
                <div>
                  <span className="bg-blue-100 text-blue-500 p-2 lg:mb-0">
                    {filter}
                  </span>
                  <span className="bg-blue-500 text-blue-100 p-2 lg:mb-0">
                    x
                  </span>
                </div>
              </span>
            ))}
            <button
              className="font-bold text-gray-700 ml-auto"
              onClick={clearFilters}
            >
              Clear
            </button>
          </div>
        )}

        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredjobs.map((job) => {
            return (
              <JobBoardComponent
                job={job}
                key={job.id}
                handleTagClick={handleTagClick}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
