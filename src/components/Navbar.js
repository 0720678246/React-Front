import phone from '../img/best.png'
import {Link} from "react-router-dom";
const Navbar=()=>{
    return (
        <div>
            <div className="header">
                <div className="header-nav">
                    <div className="container">
                        <div className="branding">
                            <h3><Link to="/">My<span className="branding-head">Mobi</span></Link></h3>
                        </div>
                        <nav >
                            <ul>
                                <li><Link to="/">Home</Link> </li>
                                <li><Link to="/about">About Us</Link> </li>
                                <li><Link to="/blog">Blog</Link> </li>
                                <li><Link to="/contact">Contact us</Link> </li>

                            </ul>
                            <div className="nav-right">
                                <a href=""><i className="fas fa-search"></i></a>
                                <a href=""><span>ENG <i className="fas fa-caret-down"></i></span></a>
                                <a href=""><i className="fas fa-bars"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="showcase">

                    <div className="container">
                        <div className="showcase-content">
                            <div className="showcase-left">
                                <h1>Transforming Lives!</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi,
                                    debitis delectus dolores earum eius enim error est ex id illum ipsa itaque
                                    iusto minima natus nobis obcaecati pariatur .</p>
                                <br/><br/>
                                <div className="icons">
                                    <div className="app-store">
                                        <h6>Download in the</h6>
                                        <i className="fab fa-apple">App Store</i>
                                    </div>
                                    <div className="play-store">
                                        <h6>Download in the</h6>

                                        <i className="fab fa-google-play"> Play store</i>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase-right">
                                <img src={phone} alt="img"/>
                            </div>
                        </div>
                    </div>

                </div>




            </div>

            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,288L60,250.7C120,213,240,139,360,112C480,85,600,107,720,138.7C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

        </div>



    )
}
    export default Navbar