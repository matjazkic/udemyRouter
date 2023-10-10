import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";

// naredimo ostale kot child zato da sem na prikazuje root oz. nav

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products />, errorElement: <Error /> },
    ],
  },
  {},
]);

// 2. nacin routanja
/* const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="products" element={<Products />} />
  </Route>
); */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
