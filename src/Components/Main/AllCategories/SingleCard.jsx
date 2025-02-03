import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    category,
    requirements,
    responsibilities,
    applicationDeadline,
    salaryRange,
    status,
    hr_email,
    hr_name,
    company_logo,
    description,
  } = job;

  return (
    <div>
      <div className="card card-compact bg-base-100 border shadow-xl ">
        <figure className="h-[150px]  ">
          <img className="" src={company_logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex">
            <p>{company}</p>
            <small className="text-gray-400">{location}</small>
          </div>
          <div className="flex gap-2 flex-wrap my-3">
            {requirements.map(data => (
              <div className="px-4 py-1 border rounded-lg hover:bg-base-300 hover:text-orange-500">
                {data}
              </div>
            ))}
          </div>
          <div className="card-actions justify-end mt-5">
            <Link to={`/applyJob/${_id}`}>
              <button className="btn btn-sm btn-accent text-white">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
