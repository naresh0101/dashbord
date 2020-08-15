import React, { Component } from 'react';
import Appbar from "../../views/Appbar"
import Sidebar from '../../views/Sidebar/index';
import AssessmentCard from "../../views/card"
import "./index.css"
import AssessmentTable from '../../views/table/AssessmentTable';

class Assessments extends Component {
  
    render() { 
        return ( 
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                 <div id="content">
                    <Appbar />
                    <div className="container-fluid">
                        <div className="m-4">
                            <div className="row m-1">
                                <div className="col-sm-6">
                                    <h1 className="h3 dashbord-title">Charts</h1>
                                    <p className="d-t-describe">
                                        Showing all 67 assessments at All clinics   
                                    </p>
                                </div>
                                <div className="col-sm-6 d-flex justify-content-end mt-auto p-2 bd-highlight">
                                    <div className="row p-2">
                                        <div className="col-sm-6">
                                            <button className="blue-btn m-none"> + New Assessment</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button className="green-btn m-none"> Bulk new assessment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <AssessmentCard />
                            <AssessmentTable />
                        </div>
                    </div>
                 </div>
                </div>
            </div>
         );
    }
}
 
export default Assessments;