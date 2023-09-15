import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Component/Home/Home";

function App() {
  return (
    <>
      <Toaster position="top-right"></Toaster>
      <Home></Home>
    </>
  );
}

export default App;
