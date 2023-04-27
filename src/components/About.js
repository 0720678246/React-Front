import background from '../img/background.jpg'
import {Link} from "react-router-dom";
import phone from "../img/best.png";
const About=()=>{
    return(
        <div>
            <div className="header about-header">
                <div className="header-nav">
                    <div className="container">

                        <div className="branding">
                            <h3><Link to="/">My<span className="branding-head">Mobi</span></Link></h3>
                        </div>
                        <nav  className="main-nav"  >
                            <ul className="nav-links">
                                <li><Link to="/">Home</Link> </li>
                                <li className="active"><Link to="/about">About Us</Link> </li>
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
                <div className="showcase">

                    <div className="container">

                    </div>

                </div>




            </div>

            <div className="about-section">
                <div className="container">
                    <div className="about-home">
                        <div className="about-main-content">
                            <h3>About MyMobi </h3>
                            <p className="main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius expedita incidunt iure molestias mollitia, officia quia rem repudiandae totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, sit? </p>
                            <img src={background} alt="img"/>
                            <p className="main1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aut beatae exercitationem, fugiat fugit magnam necessitatibus quam quod sit.</p>
                            <br/><br/>
                            <h4 >Content and Metrics for each part of the  funnel</h4>
                            <br/><br/>
                            <p className="main2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at, consectetur dolores enim eum harum illum impedit laborum nemo voluptatem.</p>
                            <br/><br/>
                            <p className="main1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet animi aspernatur assumenda autem cupiditate debitis dicta doloremque dolores doloribus ducimus eaque error id ipsum iste laudantium molestiae molestias natus nihil officia quaerat quibusdam, recusandae ullam vel voluptas. Aut, fugiat.</p>
                            <br/>
                            <p className="main1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium aliquam corporis dignissimos eveniet ipsa labore modi molestiae mollitia nam nostrum, officia praesentium quasi, suscipit temporibus veritatis voluptatem. Quasi!</p>


                        </div>
                        <div className="about-sidebar">
                            <div className="search-field">
                                <form className="search-form">
                                    <div className="search">
                                        <input type="text" className="input-search" placeholder="search"/>
                                        <i className="fas fa-search"></i>


                                    </div>


                                </form>

                            </div>
                            <div className="category">
                                <h3>Categories</h3>
                                <div className="categories">
                                    <div className="categories-list">
                                        <p className="list-active">Lorem ipsum dolor <span>05</span></p>
                                        <p className="list-inactive">Lorem ipsum dolor<span>10</span></p>
                                        <p className="list-inactive">Lorem ipsum dolor<span>11</span></p>
                                        <p className="list-inactive">Lorem ipsum dolor<span>2</span></p>
                                        <p className="list-inactive">Lorem ipsum dolor<span>04</span></p>
                                        <p className="list-inactive">Lorem ipsum dolor<span>03</span></p>
                                        <p className="list-inactive">Lorem ipsum dolor<span>1</span></p>

                                    </div>

                                </div>

                            </div>
                            <div className="latest-trends">
                                <h3>Latest Trends</h3>
                                <p className="list-active">Lorem ipsum dolor sit amet, consectetur</p>
                                <p className="last">Lorem ipsum dolor sit amet, consectetur </p>
                                <br/>

                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur </p>
                                <p className="last">Lorem ipsum dolor sit amet, consectetur </p>
                                <br/>

                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur </p>
                                <p className="last">Lorem ipsum dolor sit amet, consectetur </p>
                                <br/>

                                <br/>

                            </div>
                            <div className="keywords">
                                <h3>Keywords</h3>
                                <ul className="keywords-links1">
                                    <li><a href="">business</a> </li>
                                    <li><a href="">Travel</a> </li>
                                    <li><a href="">Shopping</a> </li>
                                </ul>
                                <ul className="keywords-links2">
                                    <li><a href="">Fashion</a> </li>
                                    <li className="active-keyword"><a href="">Food</a> </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="share-about">
                <div className="container">
                    <div className="share-about1">
                        <div className="left-share">
                            <i className="fa-3x fas fa-circle"></i>

                            <p>Michelle</p>
                        </div>
                        <div className="right-share">
                            <i className="fas fa-share-alt"></i>
                            <span>Share the Post </span>
                            <i className="fab fa-facebook-f new5"></i>
                            <i className="fab fa-linkedin-in new6" ></i>
                            <i className="fab fa-google-plus-g new6"></i>
                            <i className="fab fa-twitter new6"></i>
                        </div>

                    </div>


                </div>


            </div>
        </div>
    )
}
export default About