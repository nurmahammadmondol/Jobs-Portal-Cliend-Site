import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Provider/useAuth';
import { useLoaderData, useParams } from 'react-router-dom';

const ApplyJobForm = () => {
  const { User } = useAuth();
  const { id } = useParams();
  const LoadData = useLoaderData();
  // console.log(User);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);

    const date = new Date();
    // console.log(date);

    const Data = {
      Job_ID: id,
      ApplicantEmail: User.email,
      Company: LoadData.company,
      Category: LoadData.category,
      Company_Logo: LoadData.company_logo,
      ApplyTime: date,
      projectLink: data.ProjectLink,
      githubLink: data.githubLink,
      linkedinLink: data.linkedinLink,
    };

    axios
      .post('http://localhost:7000/JobsApply', Data)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-10">
      <h4 className="mb-10 text-2xl font-bold text-center">Apply Job Form</h4>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Project Link</label>
            <input
              type="url"
              {...register('ProjectLink', {
                required: 'Best Project link is required',
              })}
              className="w-full p-2 border rounded"
              placeholder="Enter your best project link"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Github Link</label>
            <input
              type="url"
              {...register('githubLink', {
                required: 'Github link is required',
              })}
              className="w-full p-2 border rounded"
              placeholder="Enter your github link"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Linkedin Link</label>
            <input
              type="url"
              {...register('linkedinLink', {
                required: 'Linkedin link is required',
              })}
              className="w-full p-2 border rounded"
              placeholder="Enter your github link"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-500"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobForm;
