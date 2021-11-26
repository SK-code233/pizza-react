import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      	<nav className="navbar navbar-expand-lg navbar-light bg-light navhome">
  <a className="navbar-brand col-md-8" id="navpizz" href="#">
    <img src="mania.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
    PIZZAMANIA</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse col-md-4" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Pizza</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pizza Types</a>
      </li>
    </ul>
  </div>
</nav>


<div className="container-fluid">
  <div className="row">

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
  </ol>

  <div className="carousel-inner carousel-content">
  <div className="carousel-item active">
      <img src="images/a.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/b.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/de.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/d.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/f.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/c.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



  </div>
</div>

<div className="container">
  <div className="row"> 
    <h2 className="about mx-auto piz-head" style={{width: "200px"}}>  About Pizza  </h2>
  </div>

  <div className="row"> 
    <div className="col-xs-11 col-md-6">
      <img src="images/colorfulpiz.jpg" className="img-fluid" id="colorpiz"/>
    </div>


    <div className="col-xs-12 col-md-6"  id="textpiz">
      <h3> Pizza Is Awesome </h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Except ur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

  </div>
</div>

<div className="container-fluid">

  <div className="row">
    <h3 className="piz-type mx-auto piz-head" style={{width: "200px"}}> Pizza Types </h3>
  </div>

  <div className="row">
    <span>
      <div className="col-xs-12 col-md-3 pizza-types pepper">
        <div className="card" style={{width: "18rem"}}>
          <img src="images/amirali-mirhashemian-w1iMfs6yxuo-unsplash.jpg" className="card-img-top card-imgheight" alt="pepperoni"/>
          <div className="card-body">
            <h5 className="card-title piz-head">Pepperoni Pizza</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </span>
    <span>
      <div className="col-xs-12 col-md-3 pizza-types">
        <div className="card" style={{width: "18rem"}}>
          <img src="images/veggie1.jpg" className="card-img-top card-imgheight" alt="pepperoni"/>
            <div className="card-body">
              <h5 className="card-title piz-head">Vegetable Pizza</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>
       </span>
       <span> 
      <div className="col-xs-12 col-md-3 pizza-types">
      <div className="card" style={{width: "18rem"}}>
        <img src="images/cheese1.jpg" className="card-img-top card-imgheight" alt="pepperoni"/>
        <div className="card-body">
          <h5 className="card-title piz-head">Cheese Pizza</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
  </span>
  <span>
    <div className="col-xs-12 col-md-3 pizza-types">
      <div className="card" style={{width: "18rem"}}>
        <img src="images/veggie2.jpg" className="card-img-top card-imgheight" alt="pepperoni"/>
        <div className="card-body">
          <h5 className="card-title piz-head">Bossu Pizza</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
    </span>
    
  </div>
</div>


<div className="footer">
  <div className="container">
      <p className="text-center">
        &copy; 2021 Pizzamania All Rights Reserved
      </p>
  
  </div>
</div>
    </div>
  );
}

export default App;
