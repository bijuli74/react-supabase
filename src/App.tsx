import './App.css'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import AllPosts from './AllPosts';
import PostView from './PostView';
import MessageBoard from './MesssageBoard';
import Welcome from './Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postid",
            element: <PostView />,
          },
        ],
      },

      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
