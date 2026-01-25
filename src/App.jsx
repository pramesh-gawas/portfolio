import "./App.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailPage } from "./components/DetailPage";
import { Provider } from "react-redux";
import Store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Projects",
        element: <Projects></Projects>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Detail/:Id",
        element: <DetailPage></DetailPage>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
