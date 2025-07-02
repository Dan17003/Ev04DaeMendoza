const Header = () => {
  return (
    <header>
      <nav classname="navbar navbar-expand-lg bg-body-tertiary">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="#">Product Store</a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div classname="navbar-nav">
        <a classnamename="nav-link active" aria-current="page" href="#">Home</a>
        <a classname="nav-link" href="#">Products</a>
        <a classname="nav-link" href="#">Contact</a>
        
      </div>
    </div>
  </div>
</nav>
    </header>
  );
};

export default Header;