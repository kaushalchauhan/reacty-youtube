import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter}>
        <div className="">
          {/**
           * Head
           * Sidebar
           *  - MenuItems
           * MainContainer
           *  - Buttons
           *  - VideoContainer
           *    - Video Card
           */}

          <Body />
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
