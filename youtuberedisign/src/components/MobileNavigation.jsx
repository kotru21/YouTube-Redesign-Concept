export default function MobileNavigation() {
  return (
    <nav className="mobile-navigation">
      <a href="#" className="mobile-nav-item active">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <i className="fas fa-fire"></i>
        <span>Trending</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <i className="fas fa-tv"></i>
        <span>Subscriptions</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <i className="fas fa-folder"></i>
        <span>Library</span>
      </a>
    </nav>
  );
}
