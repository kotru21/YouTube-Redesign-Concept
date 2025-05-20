import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MobileNavigation from "./components/MobileNavigation";
import VideoPlayer from "./components/VideoPlayer";
import VideoDescription from "./components/VideoDescription";
import VideoList from "./components/VideoList";
import { useState } from "react";
import "./globals.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="container">
        <Sidebar isOpen={isSidebarOpen} />
        <main
          className={`main-content ${
            !isSidebarOpen ? "sidebar-collapsed" : ""
          }`}>
          <div className="video-content">
            <div className="video-main-content">
              <VideoPlayer />
              <VideoDescription />
            </div>
            <VideoList />
          </div>
        </main>
      </div>

      <MobileNavigation />
    </>
  );
}

export default App;
