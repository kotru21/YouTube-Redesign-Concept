import logo from "../assets/logo.svg";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-button" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <a href="#">
          <img src={logo} className="logo" alt="YouTube logo" />
        </a>
      </div>

      <div className="navbar-center">
        <form className="search-form">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div className="navbar-right">
        <button className="navbar-icon-button">
          <i className="fas fa-video"></i>
        </button>
        <button className="navbar-icon-button">
          <i className="fas fa-th"></i>
        </button>
        <button className="navbar-icon-button notification-button">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">1</span>
        </button>
        <a href="#" className="avatar">
          <img
            src="https://placehold.co/600x400/orange/white"
            alt="User avatar"
          />
        </a>
      </div>
    </header>
  );
}
