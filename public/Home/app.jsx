const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
          <li><a href="index.html">Home</a></li>
          <li><a href="../About/about.html">About</a></li>
          <li><a href="../Booking/booking.html">Booking</a></li>
          <li><a href="../Shop/shop.html">Trainers</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    );
  };
  
  const App = () => {
    return (
      <div className="container">
        <Navbar />
        <div className="content">
          <h1>Bigger body<br />Bigger confidence</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="../About/about.html" className="cta-button">Join us today!</a>
        </div>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  