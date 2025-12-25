import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTripPage from "./CreateTrip";
import TripDetailsPage from "./TripDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
