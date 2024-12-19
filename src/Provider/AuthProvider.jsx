import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Components/Home/HomePage';
import MainRoot from '../Components/MainRoot/MainRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    errorElement: <h3>Error 404</h3>,
    children: [
      {
        path: '/',
        element: <MainRoot></MainRoot>,
      },
    ],
  },
]);

export default router;
