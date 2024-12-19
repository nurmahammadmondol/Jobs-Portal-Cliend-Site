import { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';

const AllCategories = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/Jobs')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setJobs(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold text-center">All Jobs Categories</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
        {jobs.map(job => (
          <Jobs key={job._id} Job={job}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
