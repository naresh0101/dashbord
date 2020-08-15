import React from 'react';
import "./index.css"

function Appbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a className="nav-link dropdown-toggle" href="http://demo" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li className="nav-item dropdown no-arrow mx-1">
          <p className="nav-link dropdown-toggle" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className=" badge-counter bell p-1"></span>
          <img src="icon/bell.png" alt="bell-icon"
          srcset="icon/bell@2x.png 2x,
                  icon/bell@3x.png 3x"/>
          </p>
          {/* <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">
              Alerts Center
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="http://demo">
              <div className="mr-3">
                <div className="icon-circle bg-success">
                  <i className="fas fa-donate text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 7, 2019</div>
                $290.29 has been deposited into your account!
              </div>
            </a>
          </div> */}
        </li>
        
        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item dropdown no-arrow">
          <div className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img alt="login-user" className="img-profile rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/225px-Solid_blue.svg.png"/>
          </div>
          <div className="dropdown-menu dropdown-menu-right " aria-labelledby="userDropdown">
            <div className="dropdown-item d-flex align-items-center bg-blue">
              <div className="mr-3">
                <div className="icon-circle" >
                  <img alt="login-user" style={{width:'40px'}} className="img-profile rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/225px-Solid_blue.svg.png"/>
                </div>
              </div>
              <div className="p-2">
                <span> Lorem Ipsum dolor</span>
                <div className="small">Super admin</div>
                <div className="small">Loremipsumdolor@gamil.com</div>
              </div>
            </div>
            <div className="dropdown-item bg-none" data-toggle="modal" data-target="#logoutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              
              
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
export default Appbar;