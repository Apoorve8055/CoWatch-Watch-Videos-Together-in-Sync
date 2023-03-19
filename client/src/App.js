import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import "./App.scss";

const App = () => {
  const currentUser = true;
  const Layout = () => {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Outlet />
      </div>
    );
  };
  const ProtactRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/cowatchroom",
      element: <h1>cowatchroom</h1>,
    },
    {
      path: "/",
      element: (
        <ProtactRoute>
          <Layout />
        </ProtactRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/chat",
          element: <h1>Chat</h1>,
        },
        {
          path: "/profile",
          element: <h1>Profile</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
