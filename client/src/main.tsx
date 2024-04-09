import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PlansPage from "./pages/PlansPage";
import BrowsePage from "./pages/BrowsePage";
import WatchPage from "./pages/WatchPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/plans" element={<PlansPage />}></Route>
      <Route path="/browse" element={<BrowsePage />}></Route>
      <Route path="/browse/watch/:id" element={<WatchPage />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
