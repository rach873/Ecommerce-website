import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({cartItems}) {
    return <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                <Link to="/"> <img width="150px" src="/images/logo.png" /></Link>
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
              <Search/>
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <Link to={"/cart"}>
                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </Link>
            </div>
        </nav>
}

//<img width="150px" src="/images/logo(1).png"/>
/*export default function Header(){
  return  <nav className="navbar row">
  <div className="col-12 col-md-3">
    <div className="navbar-brand">
      
    </div>
  </div>

  <div className="col-12 col-md-6 mt-2 mt-md-0">
    <div className="input-group">
      <input type="text" id="search_field" className="form-control" placeholder="Enter Product Name ..." />
      <div className="input-group-append">
        <button id="search_btn" className="btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>

  <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
    <span id="cart" className="ml-3">Cart</span>
    <span className="ml-1" id="cart_count">2</span>
  </div>
</nav>
}*/