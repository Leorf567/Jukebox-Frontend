import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="inner-container header-content">
        <div className="logo-placeholder">Logo</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#docs">Docs</a>
          <a href="#contribute">Contribute</a>
          <a href="/login">Login</a>
          <button className="sign-up-btn">Sign Up</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;