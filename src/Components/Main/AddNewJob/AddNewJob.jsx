import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewJob = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="my-10 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <h5 className="text-center font-bold text-2xl  mb-5">Add a new job</h5>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              {...register('category', { required: 'Category is required' })}
              className="w-full p-2 border rounded"
              placeholder="Enter category"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Company</label>
            <input
              type="text"
              {...register('company', {
                required: 'company is required',
              })}
              className="w-full p-2 border rounded"
              placeholder="Enter company name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              {...register('title', {
                required: 'Title is required',
              })}
              className="w-full p-2 border rounded"
              placeholder="Enter  title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Job Type</label>
            <input
              type="text"
              {...register('jobType', {
                required: 'jobType is required',
              })}
              className="w-full p-2 border rounded"
              placeholder="Enter job type"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Deadline</label>
            <input
              type="date"
              {...register('applicationDeadline', {
                required: 'applicationDeadline is required',
              })}
              className="w-full p-2 border rounded"
              placeholder="Enter application deadline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              {...register('description', {
                required: 'Description is required',
              })}
              className="textarea textarea-bordered w-full"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-500"
          >
            Add job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewJob;
