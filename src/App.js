import "./App.css";
import Status from "./components/Status";

function App() {


  return (
    <div>
      <div className="container mx-auto p-8 m-10">
        <h1 className="text-white text-center text-3xl">National Rail Status (Southern Rail, Thameslink, etc)</h1>
        <br />
    <Status></Status>
    </div>
    </div>
  );
 }

export default App;