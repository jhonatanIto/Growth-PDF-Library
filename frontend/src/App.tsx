import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
