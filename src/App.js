import Banner from "./components/banner";
import Form from "./components/form";
import Result from "./components/result";

function App() {
  return (
    <div className="container mx-auto px-5 mt-5 md:w-1/2">
      <Banner />
      <Form />
      <Result />
    </div>
  );
}

export default App;
