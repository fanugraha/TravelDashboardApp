import React from 'react'; 

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Homepage from "./pages/home/Homepage";
import { useRoutes } from "react-router";
import AuthPage from "./pages/auth/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserPage from './component/user-list/UserPage';
import PromoForm from './component/promo/PromoForm';
import UserRole from './component/user-list/UserRole';
import PromoDetail from './component/promo/PromoEdit';
import CategoryDetail from './component/category/CategoryDetail';

import PromoPages from './pages/promo/PromoPages';
import ActivityPages from './pages/activity/ActivityPages';
import PromoFormEdit from './component/promo/PromoFormEdit';
import ActivityCreate from './component/category/activityCreate';
import ActivityEdit from './component/category/ActivityEdit';

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/user",
    element: <UserPage/>,
  },

  {
    path: "/user-role/:uuid",
    element: <UserRole />,
  },
  

  {
    path: "/activity-detail/:uuid",
    element: <CategoryDetail />,
  },
  {
    path: "/promo",
    element: <PromoPages/>,
  },
  {
    path: "/promo-create",
    element: <PromoForm/>,
  },
  {
    path: "/promo-update/:uuid",
    element: <PromoFormEdit/>,
  },
  {
    path: "/promo-detail/:uuid",
    element: <PromoDetail />,
  },
  {
    path: "/activity",
    element: <ActivityPages/>,
  },
  {
    path: "/activity-create",
    element: <ActivityCreate/>,
  },
  {
    path: "/activity-update/:uuid",
    element: <ActivityEdit/>,
  },
];

function App() {
  const element = useRoutes(routes);
  return (
    <MantineProvider>
      {element}
    </MantineProvider>
  );
}

export default App; 
