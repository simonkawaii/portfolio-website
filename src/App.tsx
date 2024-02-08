import { Outlet } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <DefaultLayout>
      <Navbar />
      <Outlet />
      <Footer />
    </DefaultLayout>
  );
}

export default App;
