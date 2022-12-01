import React from 'react'
import { useSelector } from 'react-redux'

const Navigation = () => {
  const count = useSelector((state) => state.carts.value)

  return ( 
    <div>
<nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">React shopping</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
              <button class="position-relative btn btn-primary"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <i className="bi bi-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  { count && count.length}
                  <span class="visually-hidden"></span>
                </span>
              </button>
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>

    <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <div >
      
      <ul className="list-group list-group-flush">
        { count.map((data) => (
          <li className="list-group-item py-3 ps-0 border-top">
          <div className="row align-items-center">
            <div className="col-3 col-md-2">
              <img src={data.image} alt="Ecommerce" className="img-fluid"/>
            </div>
            <div className="col-4 col-md-6 col-lg-5">
              <a href="./pages/shop-single.html" className="text-inherit">
                <h6 className="mb-0">{data.title}</h6>
              </a>
            </div>
            
            <div className="col-2 text-lg-end text-start text-md-end col-md-2">
              <span className="fw-bold">${data.price}</span>
            </div>
          </div>

        </li>
        ))}
        
      
      </ul>
      <div class="d-flex justify-content-between mt-4">
        <a href="#!" class="btn btn-primary">Continue Shopping</a>
        <a href="#!" class="btn btn-dark">Update Cart</a>
      </div>

    </div>
      </div>
    </div>
    </div>
    

   );
}
 
export default Navigation;