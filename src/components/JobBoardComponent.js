import React from "react";

const JobBoardComponent = ({ job, handleTagClick }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div className="flex flex-col bg-white shadow-md my-16 mx-10 p-6  lg:flex-row lg:my-4">
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24 lg:my-0"
          src={job.logo}
          alt={job.company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-blue-500">
          {job.company}
          {job.new && (
            <span className="bg-blue-500 text-blue-100 font-bold m-2 py-1 px-2 rounded-full text-sm">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="bg-gray-800 text-white font-bold py-1 px-2 rounded-full text-sm">
              FEATURED
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} * {job.contract} * {job.location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t-2 border-gard-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
        {tags &&
          tags.map((tag) => {
            return (
              <span
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="cursor-pointer text-blue-500 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0"
              >
                {tag}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default JobBoardComponent;
