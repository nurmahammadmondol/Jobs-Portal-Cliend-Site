import React, { useEffect, useState } from 'react';
import useAuth from '../../../Provider/useAuth';
import axios from 'axios';

const MyApplyJobs = () => {
  const { User } = useAuth();

  const [myJob, setMyJob] = useState([]);

  useEffect(() => {
    if (User?.email) {
      axios
        .get(`http://localhost:7000/JobsApply?email=${User.email}`)
        .then(res => {
          console.log('Received Jobs:', res.data);
          setMyJob(res.data);
        })
        .catch(error => {
          console.error('Error fetching applied jobs:', error);
        });
    }
  }, [User]);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
      <h5 className="text-center text-2xl mb-10 border-b">MY Apply Jobs</h5>

      <div className="overflow-x-auto border">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr className="text-center">
              <th>No</th>
              <th>Email</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myJob.map((job, i) => (
              <tr className="text-center">
                <th>{i + 1}</th>
                <td>{job.ApplicantEmail}</td>
                {job.ApplyTime ? <td>{job.ApplyTime}</td> : <td>_ _ _</td>}

                <td>
                  <button className="btn text-xs btn-circle">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplyJobs;
