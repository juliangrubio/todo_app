import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from '../pages/app/AppLayout';
// import Todos from '../pages/todos/Todos';

const Layout = () => {
  return (
    <div>
      {/* // <Header /> */}
      <Outlet />
      {/* // <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
      },
      // {
      //   path: "/todos",
      //   element: <Todos />,
      // },
    ],
  },
]);

const AppRoutes = () => {
  return (

    <RouterProvider router={router}/>

  )
}

export default AppRoutes;

