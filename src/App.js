import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
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
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
