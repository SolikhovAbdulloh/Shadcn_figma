import Information from "@/pages/infomartion";
import Layout from "@/pages/Layout";
import { createBrowserRouter } from "react-router-dom";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Information />,
      },
    ],
  },
]);
