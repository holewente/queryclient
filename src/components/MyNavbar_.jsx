import { NavLink } from 'react-router-dom';

export const MyNavBar=()=>{
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
        <NavLink to="about" className="nav-link" href="#">About </NavLink>
        <NavLink to="contacts" className="nav-link" href="#">Contacts</NavLink>
        <NavLink to="products" className="nav-link" href="#">Products</NavLink>
      </div>
    </div>
  </div>
</nav>

    );
}

