import React from "react";

const JobBoardComponent = ({ job }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div
      className={`flex bg-white shadow-md m-4 p-6 rounded ${
        job.featured && "border-l-4 border-blue-500 border-solid"
      }`}
    >
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-blue-500">
          {job.company}
          {job.new && (
            <span className="bg-blue-500 text-blue-100 font-bold m-2 py-1 px-2 rounded-full">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="bg-gray-800 text-white font-bold py-1 px-2 rounded-full">
              FEATURED
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} * {job.contract} * {job.location}
        </p>
      </div>
      <div className="flex items-center justify-end ml-auto">
        {tags &&
          tags.map((tag) => {
            return (
              <span className="text-blue-500 bg-blue-100 font-bold m-2 p-2 rounded">
                {tag}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default JobBoardComponent;
