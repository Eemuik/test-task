import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import CreateArticle from "./pages/create-article";
import EditArticle from "./pages/edit-article";
import Home from "./pages/home";
import Login from "./pages/login";
import ViewArticle from "./pages/view-article";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/:articleId/view",
    element: (
      <ProtectedRoute>
        <ViewArticle />
      </ProtectedRoute>
    ),
  },
  {
    path: "/:articleId/edit",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <EditArticle />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create-article",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <CreateArticle />
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
