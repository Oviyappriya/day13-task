

const Home=() => {
 
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-white">
    
  <a className="navbar-brand" href="#">Start BootStrap</a>
    <button className=" navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home </a>
        <a className="nav-item nav-link" href="#">Features</a>
       
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Shop
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="  #">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <i className="fa-solid fa-cart-shopping">Cart</i>
        </div>
      </li>
      
      
        </div>
    </div>
   
</nav>

       

  );
};

export default Home;