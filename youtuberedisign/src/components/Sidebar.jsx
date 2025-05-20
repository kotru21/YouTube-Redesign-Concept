export default function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      {/* Основные вкладки */}
      <section className="sidebar-section">
        <h2 className="visually-hidden">Main menu</h2>
        <a href="#" className="sidebar-item active" aria-current="page">
          <i className="fas fa-home" aria-hidden="true"></i>
          <span>Home</span>
        </a>
        <a href="#" className="sidebar-item">
          <i className="fas fa-fire"></i>
          <span>Trending</span>
        </a>
        <a href="#" className="sidebar-item">
          <i className="fas fa-tv"></i>
          <span>Subscriptions</span>
        </a>
      </section>

      {/* Вторая секция */}
      <section className="sidebar-section">
        <h2 className="visually-hidden">Library</h2>
        <a href="#" className="sidebar-item">
          <i className="fas fa-folder"></i>
          <span>Library</span>
        </a>
        <a href="#" className="sidebar-item">
          <i className="fas fa-history"></i>
          <span>History</span>
        </a>
        <a href="#" className="sidebar-item">
          <i className="fas fa-clock"></i>
          <span>Watch later</span>
        </a>
        <a href="#" className="sidebar-item">
          <i className="fas fa-star"></i>
          <span>Favourites</span>
        </a>
        <a href="#" className="sidebar-item">
          <i className="fas fa-thumbs-up"></i>
          <span>Liked videos</span>
        </a>
        <a href="#" className="sidebar-item">
          <i className="fas fa-music"></i>
          <span>Music</span>
        </a>
        <a href="#" className="sidebar-item">
          <i className="fas fa-gamepad"></i>
          <span>Games</span>
        </a>
        <a href="#" className="sidebar-item show-more">
          <i className="fas fa-chevron-down"></i>
          <span>Show more</span>
        </a>
      </section>

      {/* Секция с подписками */}
      <section className="sidebar-section subscriptions">
        <h3 id="subscription-heading">Subscriptions</h3>
        <div role="list" aria-labelledby="subscription-heading">
          <a href="#" className="subscription-item" role="listitem">
            <img
              src="https://placehold.co/600x400/red/white"
              alt="Gussie Singleton"
              aria-hidden="true"
            />
            <span>Gussie Singleton</span>
          </a>
          <a href="#" className="subscription-item" role="listitem">
            <img
              src="https://placehold.co/600x400/blue/white"
              alt="Nora Francis"
              aria-hidden="true"
            />
            <span>Nora Francis</span>
          </a>
          <a href="#" className="subscription-item" role="listitem">
            <img
              src="https://placehold.co/600x400/green/white"
              alt="Belle Briggs"
              aria-hidden="true"
            />
            <span>Belle Briggs</span>
          </a>
          <a href="#" className="subscription-item" role="listitem">
            <img
              src="https://placehold.co/600x400/purple/white"
              alt="Eunice Cortez"
              aria-hidden="true"
            />
            <span>Eunice Cortez</span>
          </a>
          <a href="#" className="subscription-item" role="listitem">
            <img
              src="https://placehold.co/600x400/yellow/black"
              alt="Emma Hanson"
              aria-hidden="true"
            />
            <span>Emma Hanson</span>
          </a>
          <a href="#" className="subscription-item" role="listitem">
            <img
              src="https://placehold.co/600x400/pink/white"
              alt="Leah Berry"
              aria-hidden="true"
            />
            <span>Leah Berry</span>
          </a>
        </div>
      </section>
    </nav>
  );
}
