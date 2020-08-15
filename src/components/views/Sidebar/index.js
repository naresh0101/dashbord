import React from 'react';
import { Link } from 'react-router-dom';

import "./index.css"

function Sidebar() {
  return (
         <ul className="sidebar-nav">
          <img alt="clinic-logo" src="./logo/clinic-logo.png"/>
            <br/>
            <br/>
            <br/>
          <li className="border-bottom-0 p-2 active">
              <Link to="/" >Assessments</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Reports</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Users</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Billing details</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Membership</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Security</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Notifications</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Clinic profile</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Feedback</Link>
          </li>
          <li className="border-bottom-0 p-2 unactive">
              <Link to="/" >Referral</Link>
          </li>
      </ul>
     
      
  );
}

export default Sidebar;