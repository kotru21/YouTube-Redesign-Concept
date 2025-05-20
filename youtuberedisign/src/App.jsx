import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MobileNavigation from "./components/MobileNavigation";
import "./globals.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <main className="main-content"></main>
      </div>

      <MobileNavigation />
    </>
  );
}

export default App;
