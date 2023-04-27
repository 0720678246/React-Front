import {Link} from "react-router-dom";

const NotFound=()=>{
    return(
        <div className="contact-body">

            <div className="header notfound-header">
                <div className="header-nav">
                    <div className="container">

                        <div className="branding">
                            <h3><Link to="/">My<span className="branding-head">Mobi</span></Link></h3>
                        </div>
                        <nav className="main-nav"  >
                            <ul className="nav-links">
                                <li><Link to="/">Home</Link> </li>
                                <li ><Link to="/about">About Us</Link> </li>
                                <li><Link to="/blog">Blog</Link> </li>
                                <li ><Link to="/contact" >Contact us</Link> </li>

                            </ul>
                            <div className="nav-right">
                                <a href=""><i className="fas fa-search"></i></a>
                                <a href=""><span>ENG <i className="fas fa-caret-down"></i></span></a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="notfound-showcase">

                    <div className="container">
                        <div className="notfound-showcase-header">
                            <h2>How can we Help? </h2>
                            <br/>
                            <h1>Reach us through Email, Social Media or Live chat </h1>


                        </div>
                    </div>

                </div>
                <br/><br/><br/><br/>


            </div>


            <div className="container">
                <div className="notfound">
                    <h2>Sorry</h2>
                    <br/>
                    <h2>Page you are looking for is not found </h2>
                    <br/><br/>
                    <Link to="/">Back to home page</Link>

                </div>

            </div>

        </div>

    )
}
export default NotFound