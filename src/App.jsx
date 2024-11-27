import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <h1>Hello App</h1>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
