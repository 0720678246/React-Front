import {Link} from "react-router-dom";

const Footer=()=>{
    return(
        <div className="footer">

            <div className="container">
                <div className="main-footer">
                    <div className="first-footer">
                        <div className="first-footer-img">
                            <h3>My<span className="contact">Mobi</span></h3>

                        </div>
                        <br/>
                        <div className="first-footer-content">
                            <h4 className="contact">Language:English(UK)<i className="fas fa-caret-down"></i></h4>
                            <br/>
                            <div className="social-links">
                                <i className="fab fa-facebook-f contact"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-skype"></i>
                                <i className="fab fa-linkedin-in"></i>

                            </div>

                        </div>

                    </div>
                    <div className="second-footer">
                        <h3>Quick Links</h3>
                        <br/>
                        <Link to="/about">About MyMobi</Link>
                        <br/> <br/>
                        <p>How it works</p>
                        <br/>
                        <p>Promos/Discount</p>
                        <br/>
                        <Link to="/contact">Contact us</Link>

                    </div>
                    <div className="third-footer">
                        <h3>Talk to us</h3>
                        <br/>
                        <p>Capital West,</p>

                        <p>5th Floor, Lantana Road,</p>
                        <p>Westlands</p>
                        <br/>
                        <p><a href="mailto:hello@mymobi.co.ke">hello@mymobi.co.ke</a> </p>
                        <br/>
                        <a href="tel:(+254) 709 184 000" className="contact">(+254) 709 184 000</a>
                        <br/> <br/>
                        <a href="tel:(+254) 725 065 229" className="contact">(254) 725 065 229</a>

                    </div>
                    <div className="fourth-footer">
                        <h3>Stay connected</h3>
                        <br/>
                        <p>Subscribe to receive biweekly</p>
                        <p>promos on your interest</p>
                        <br/><br/>
                        <form className="footer-form">
                            <div className="form-input">
                                <input type="text"  className="input-footer" placeholder="What's your email"/>
                                <i className="fas fa-play"></i>
                            </div>



                        </form>

                    </div>
                </div>
                <div className="last-footer">
                    <div className="copyright">
                        (c) copy 2019 MyMobi.All Rights reserved

                    </div>
                    <div className="footer-icons">
                        <a href="" className="apple"><i className="fab fa-apple">Apple</i></a>
                        <a href="" className="google"><i className="fab fa-google-play">Google</i></a>

                    </div>

                </div>


            </div>


        </div>
    )
}
export default Footer