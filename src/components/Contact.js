import phone from '../img/best.png'
import {Link} from "react-router-dom";
import best2 from '../img/best3.png'
const Contact=()=>{
    return(
        <div>
            <div className="header contact-header">
                <div className="header-nav">
                    <div className="container ">

                        <div className="header-navbar">
                            <div className="branding">
                                <h3><Link to="/">My<span className="branding-head">Mobi</span></Link></h3>
                            </div>
                            <nav  className="main-nav">
                                <ul className="nav-links">
                                    <li><Link to="/">Home</Link> </li>
                                    <li><Link to="/about">About Us</Link> </li>
                                    <li><Link to="/blog">Blog</Link> </li>
                                    <li  className="contact-active"><Link to="/contact">Contact us</Link> </li>

                                </ul>
                                <div className="nav-right">
                                    <a href=""><i className="fas fa-search"></i></a>
                                    <a href=""><span>ENG <i className="fas fa-caret-down"></i></span></a>
                                    <a href=""><i className="fas fa-bars"></i></a>
                                </div>
                            </nav>

                        </div>

                    </div>
                </div>
                <div className="showcase">

                    <div className="container">
                        <div className="contact-header-content blog-header-content">
                            <h2>Let's Talk</h2>
                            <br/>
                            <h1>How can we Help?</h1>


                        </div>
                    </div>

                </div>
            </div>
            <div className="contact-us">
                <div className="container">
                    <div className=" contact-us-content">
                        <div className="contact-img">
                            <img src={best2} alt="best1"/>
                        </div>
                        <div className="contact-us-details">
                            <h3>Get in Touch</h3>
                            <br/>
                            <p>Before we put our thinking caps on,tell us a few thinks about yourself </p>

                            <br/><br/>
                            <form className="contact-us-form">
                                <div className="row1">
                                    <div className="name">
                                        <input type="text" placeholder="Name*"/>

                                    </div>
                                    <div className="email">
                                        <input type="email" placeholder="Email*"/>

                                    </div>

                                </div>
                                <br/>
                                <textarea placeholder="Message*"/>

                                <button className="contact-btn">Send Message</button>

                            </form>
                        </div>

                    </div>
                    <div className="contact-location">
                        <div className="tab1 content text-center">
                            <i className="fas fa-envelope-square"></i>
                            <div className="location-details">
                                <h3>Email Address</h3>
                                <br/>
                                <p>help@mymobi.co.ke</p>
                                <p>hello@mymobi.co.ke</p>

                            </div>



                        </div>
                        <div className="tab2 content">
                            <i className="fas fa-location-arrow"></i>
                            <div className="location-details">
                                <h3>Office Location</h3>
                                <br/>
                                <p>Capital West,</p>
                                <p>5th Floor, Lantana Road,</p>
                                <p>Westlands</p>

                            </div>



                        </div>
                        <div className="tab3 content map ">
                            <div id="map">


                            </div>
                        </div>

                    </div>


                </div>


            </div>

        </div>

    )
}
export default Contact