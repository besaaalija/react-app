import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import AddTravel from './pages/AddTravel';
import DestinationDetails from './pages/DestinationDetails';
import DestinationList from './pages/DestinationList';
import EditTravel from './pages/EditTravel';
import HomePage from './pages/HomePage';
import TravelList from './pages/TravelList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<TravelList />} />
      <Route path="/travelList" element={<HomePage />} />
      <Route path="/destinationList" element={<DestinationList />} />
      <Route path="/addTravel" element={<AddTravel />} />
      <Route path="/editTravel/:destination" element={<EditTravel />} />
      <Route path="/destinationDetails/:name" element={<DestinationDetails />} />
    </Route>
  ),
  {
    basename: "/react-app"
  }
);
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <AppLayout/>,
//     children: [
//       {
//         path: "/",
//         element:<HomePage/>
//       },
//       {
//         path: "/travelList",
//         element: <TravelList/>
//       },
//       {
//         path: "/destinationList",
//         element: <DestinationList />
//       },
//       {
//         path: "/destinationDetails/:name",
//         element: <DestinationDetails />
//       },
//       {
//         path: "/addTravel",
//         element: <AddTravel />
//       },
//       {
//         path: "/editTravel/:destination",
//         element: <EditTravel />
//       }
//     ],
//   },
//   {
//     basename: "/react-app"
//   }
// ]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
