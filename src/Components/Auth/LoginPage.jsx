import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const LoginPage = () => {
  const { LoginUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const Email = data.email;
    const Password = data.password;
    // console.log(data);
    LoginUser(Email, Password)
      .then(result => {
        console.log(result.user);

        const user = { email: Email };
        axios
          .post('http://localhost:7000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full  shadow-2xl p-5 md:p-10">
          <h1 className="text-3xl mb-5 font-bold">Login now!</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <div className="text-end m-5">
            <small>
              Dont have an account
              <Link to="/registration">
                <span className="text-blue-500 ml-2">Registration</span>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
