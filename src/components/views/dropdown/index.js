import React, {Component } from 'react';

import "./index.css"

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="btn-group">
        <button type="button" className="all-clinic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Action
        </button>
        <div className="dropdown-menu">
          <p className="clinicname p-2" >Select the clinics</p>
          <p className="clinicname p-2 border-top">Action</p>
          <p className="clinicname p-2 border-top">Action</p>
          <p className="clinicname p-2 border-top" >Action</p>
        </div>
      </div>
     );
  }
}
 
export default Dropdown;