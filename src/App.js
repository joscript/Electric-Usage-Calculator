import Banner from "./components/banner";
import Form from "./components/form";
import Result from "./components/result";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto px-5 mt-5 md:w-1/2">
        <Banner />
        <Form />
        <Result />
      </div>
    </Provider>
  );
}

export default App;
