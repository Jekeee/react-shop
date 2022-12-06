function Header() {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#n1">Header-nav-1</a>
          </li>
          <li>
            <a href="#n2">Header-nav-2</a>
          </li>
          <li>
            <a href="#n3">Header-nav-3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
