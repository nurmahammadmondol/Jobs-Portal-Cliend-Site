import React from 'react';
import HomePage from '../Components/Home/HomePage';
import MainRoot from '../Components/MainRoot/MainRoot';

import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../Components/Auth/LoginPage';
import RegistrationPage from '../Components/Auth/RegistrationPage';
import AddNewJob from '../Components/Main/AddNewJob/AddNewJob';
import ApplyJobForm from '../Components/Main/ApplyJobForm/ApplyJobForm';
import MyApplyJobs from '../Components/Main/Jobs/MyApplyJobs';
import { param } from 'motion/react-client';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    errorElement: <h3>Error 404</h3>,
    children: [
      {
        path: '/',
        element: <MainRoot></MainRoot>,
      },
      {
        path: '/addNewJob',
        element: <AddNewJob></AddNewJob>,
      },
      {
        path: '/myApplyJobs',
        element: <MyApplyJobs></MyApplyJobs>,
      },
      {
        path: '/applyJob/:id',
        element: <ApplyJobForm></ApplyJobForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/Jobs/${params.id}`),
      },

      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/registration',
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
]);

export default Routers;
