import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="app" style={appStyle}>
        <nav className="navbar" style={navStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}><NavLinkWithHover to="/">Home</NavLinkWithHover></li>
            <li style={navItemStyle}><NavLinkWithHover to="/about">About</NavLinkWithHover></li>
            <li style={navItemStyle}><NavLinkWithHover to="/skills">Skills</NavLinkWithHover></li>
            <li style={navItemStyle}><NavLinkWithHover to="/contact">Contact</NavLinkWithHover></li>
          </ul>
        </nav>

        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const appStyle = {
  backgroundColor: '#e6f2e6',
  minHeight: '100vh',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

};

const navStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '1rem',
  marginBottom: '2rem',
  width: '100%',
  maxWidth: '600px',
  textAlign: 'center',
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const navItemStyle = {
  margin: '0 1.5rem',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  fontSize: '1.2rem',
  transition: 'color 0.3s ease',
};

const contentStyle = {
  backgroundColor: '#f9f9f9',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '800px',
  textAlign: 'center',
};

const navLinkHoverStyle = {
  ...navLinkStyle,
  color: '#0056b3',
};

const NavLinkWithHover = ({ to, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Link
      to={to}
      style={isHovered ? navLinkHoverStyle : navLinkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};

export default App;
