import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const RegistrationPage = () => {
  const { CreateUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const Email = data.email;
    const Password = data.password;
    CreateUser(Email, Password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-5 md:p-10">
          <h1 className="text-2xl md:text-3xl mb-5 text-center  font-bold">
            Registration now!
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
              />
              {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    // value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email format',
                  },
                })}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
              {/* {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )} */}
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
              />
              {/* {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )} */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </form>

          <div className="text-end mt-2">
            <small>
              Have an account
              <Link to="/login">
                <span className="text-blue-500 ml-2">Log in</span>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
