import React from 'react';
import { motion } from 'framer-motion';

const Jobs = ({ Job }) => {
  const {
    company_logo,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    company,
    requirements,
    responsibilities,
    status,
    salaryRange,
    description,
  } = Job;

  return (
    <motion.div
      className="border bg-gray-50 rounded-lg p-3 flex flex-col justify-between h-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ stiffness: 400, damping: 10 }}
    >
      <div className="flex flex-col flex-wrap">
        <div className="flex items-center gap-3 mb-7">
          <div>
            <img className="w-14" src={company_logo} alt="" />
          </div>
          <div>
            <h4 className="font-bold">{company}</h4>
            <p className="text-gray-400 flex items-center gap-1">
              <i class="fa-solid fa-location-dot"></i>
              {location}
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-xl font-bold">{category}</h3>
          <div className="flex gap-5 items-center">
            <small className="text-gray-400 flex items-center gap-1">
              <i class="fa-solid fa-briefcase"></i>
              {jobType}
            </small>
            <small className="text-gray-400 flex items-center gap-1">
              <i class="fa-regular fa-clock"></i>
              {applicationDeadline}
            </small>
          </div>

          <p className="my-5 text-sm text-gray-400">{description}</p>

          <div className="flex flex-wrap gap-2">
            {requirements.map(info => (
              <small className="bg-slate-100 px-2 py-1 rounded-sm">
                {info}
              </small>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center bottom-0">
        <div className="text-sm ">
          Salary :
          <span className="font-semibold text-gray-400">
            {salaryRange.min} - {salaryRange.max}
          </span>
          {salaryRange.currency}
        </div>
        <button className="btn btn-sm bg-blue-50">Apply Now</button>
      </div>
    </motion.div>
  );
};

export default Jobs;
