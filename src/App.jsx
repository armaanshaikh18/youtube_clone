import React from "react";
import "./App.css";
import Header from "./container/Header";
import AppBody from "./container/AppBody";
import { Provider } from "react-redux";
import store from "../store";
import { createBrowserRouter, RouterProvider } from "react-router";
import VideoDetails from "./components/VideoDetails";
import MainContainer from "./container/MainContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppBody />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <VideoDetails />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
