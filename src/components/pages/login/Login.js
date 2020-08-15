import React, { Component } from 'react';

import "./index.css"

class Login extends Component {

    render() { 
        return ( 
            <div className="row">
                <div className="col-sm-6">
                    <div className="login-container">
                        <img alt="logo" src="logo/logo.png"/>
                        <form onSubmit={this.handleSubmit} className="mt-4">
                            <p className="email">Email address</p>
                            <div className="border mb-2">
                                <span className="brd-right pl-3 pr-3">
                                    <img alt="mail-icon" src="icon/mail-2.png"
                                        srcset="icon/mail-2@2x.png 2x,
                                                icon/mail-2@3x.png 3x"
                                        className="mail-2"/>
                                </span>
                                <input className="" placeholder="Enter your email id" type="email" />
                            </div>

                            <p className="password">Password</p>
                            <div className="border">
                                <span className="brd-right pl-3 pr-3">
                                <img alt="password-icon" src="icon/password-3.png" srcset="icon/password-3@2x.png 2x,
                                        icon/password-3@3x.png 3x"
                                    className="password-3"/>
                                </span>
                                <input className="" placeholder="Enter your password" type="password" />
                            </div>
                           <p className="forgot-pass">
                                <a href="/forgot-password" >Forgot password ?</a>
                           </p>

                           <button type="submit">
                               Login
                           </button>
                           <a href="/">
                               <p className="signup-link">
                               Don't have an account?
                           <span className="text-style-1"> Sign up</span></p>
                           </a>
                        </form>
                    </div>

                </div>

                <div className="col-sm-6">
                    <div className="Rectangle">
                        <img src="img/skin-care-product-web-page-scene-2-x-1.png"
                        alt="laptop"
                            className="skin-care-product-web-page-scene2x-1"/>
                         <h4 className="text-white">
                            Lorem ipsum dolor sit
                        </h4>
                        <span className="text-white">
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                        </span>
                        <span className="text-white">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                        </span>
                       <div className="mt-4 d-flex justify-content-center">
                            <span className="Ellipse-216"></span>
                            <span className="Ellipse-216"></span>
                            <span className="Ellipse-218"></span>
                            <span className="Ellipse-216"></span>
                            <span className="Ellipse-216"></span>
                       </div>
                    <div>                      
                    </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;