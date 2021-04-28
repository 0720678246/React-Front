import best2 from '../img/best3.png'
import best4 from '../img/best4.png'
import {Link} from "react-router-dom";
import phone from "../img/best.png";
import HomeBlogs from "./HomeBlogs";
import {Component} from 'react';
// import PropTypes from 'prop-types';


class  Home extends Component{

    render(){

        const posts=this.props.posts
        const error=this.props.error
        const isPending=this.props.ispending

        console.log(this.props.ispending)

        return(
            <div>

                <div className="header home-header">

                    <div className="header-nav">
                        <div className="container">

                            <div className="branding">
                                <h3><Link to="/">My<span className="branding-head">Mobi</span></Link></h3>
                            </div>
                            <nav className="main-nav" >
                                <ul className="nav-links">
                                    <li  className="home-active"><Link to="/">Home</Link> </li>
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
                                    <div className="showcase-left-top">
                                        <h1>Transforming Lives!</h1>
                                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi,
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


                                </div>
                                <div className="showcase-right">
                                    <img src={phone} alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,288L60,250.7C120,213,240,139,360,112C480,
                    85,600,107,720,138.7C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,
                    192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,
                    480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <div className="container">


                    <div className="home">
                        <span><i className="fas fa-pen-nib"></i> Transforming Lives!</span>

                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eveniet explicabo ipsam ullam. Obcaecati, porro quisquam reiciendis rem tempore voluptatum! </h3>
                    </div>
                    <br/><br/><br/><br/>
                    <div className="home-icons">
                        <div className="row">
                            <div className="first tabs">
                                <h5><i className="far fa-gem"></i>Lorem ipsum dolor </h5>

                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt</p>
                                <br/>
                                <h4><i className="fas fa-chevron-right active"></i>Discover</h4>

                            </div>
                            <div className="second tabs">
                                <h5><i className="fab fa-android"></i>Lorem ipsum dolor</h5>


                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt </p>
                                <br/>
                                <h4><i className="fas fa-chevron-right inactive"></i></h4>

                            </div>
                            <div className="third tabs">
                                <h5><i className="far fa-star"> </i>Lorem ipsum dolor</h5>

                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt</p>
                                <br/>
                                <h4><i className="fas fa-chevron-right inactive"></i></h4>

                            </div>

                        </div>

                    </div>
                    <br/><br/>
                    <br/><br/>
                    <div className="how-it-works">
                        <div className="header-works">
                            <i className="far fa-gem"></i>
                            <p>MyMobi is a lifetime </p>
                            <br/>
                            <h2>How MyMobi Works</h2>

                        </div>
                        <br/><br/>
                        <div className="main-works">
                            <div className="main-works-img">
                                <img src={best2} alt="best2"/>



                            </div>
                            <div className="main-works-content">
                                <i className="fas fa-cog ist"></i>
                                <br/><br/>
                                <h2>With powerful Features</h2>
                                <h2>an intuitive Interface</h2>
                                <br/><br/>

                                <p>Every product must make a statement and we're ready to create it with holistic approach.We believe that payments is a problem rooted in code, not finance.We obsessively seek our elegant, </p>
                                <br/><br/>
                                <div className="hr">
                                    <span className="dot">.</span>
                                    <span >Creating new offerings that generate value for business</span>

                                </div>
                                <br/>
                                <div className="hr">
                                    <span className="dot">.</span>
                                    <span >  We Work in Partnership with our clients </span>

                                </div>
                                <br/>
                                <div className="hr">
                                    <span className="dot">.</span>
                                    <span >Be the first to know about critical events as they happen</span>

                                </div>
                                <br/><br/>

                                <button className="btn">Explore More</button>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="registration">
                        <div className="registration-left">
                            <i className="fas fa-braille"></i>
                            <h3>3 Step Registration Process</h3>
                            <br/><br/>
                            <h2><a href="">The more we know about you, the better we're able to share relevant offers/promos with you.</a> </h2>
                            <br/>
                            <h3><a href="">We promise to keep your Information private and never spam you</a> </h3>
                            <br/><br/>
                            <p><span>.</span>Creating new offerings that generate value for businesses</p>
                            <br/>
                            <p><span>.</span>We work in Partnership with our clients</p>
                            <br/>
                            <p><span>.</span>Be the first to know about critical events as they happen</p>

                            <button className="registration-btn">Explore More</button>
                        </div>
                        <div className="registration-right">
                            <div className="registration-img">
                                <img src={best4} alt="alex"/>

                            </div>

                        </div>
                    </div>
                    <br/><br/>
                    <div className="testimonials">
                        <div className="container">
                            <div className="testimonial-header">
                                <i className="fas fa-quote-right"></i>
                                <br/><br/>
                                <h3>Testimonial</h3>
                                <br/>
                                <h2>What Our Clients Say</h2>

                            </div>
                            <br/><br/>
                            <div className="owl-carousel owl-theme owl-clients">
                                <div className="owl-content first">
                                    <i className="fas fa-circle fa-3x"></i>
                                    <h4>Alex Mwangi</h4>
                                    <br/>
                                    <p>Lorem ipsum dolor sit.</p>
                                    <br/><br/>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cum earum explicabo incidunt minus numquam officiis pariatur repudiandae sequi.</p>
                                    <br/><br/>
                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>

                                </div>
                                <div className="owl-content second">
                                    <i className="fas fa-circle fa-3x"></i>
                                    <h4>Philip Mwangi</h4>
                                    <br/>
                                    <p>Lorem ipsum dolor sit.</p>
                                    <br/><br/>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cum earum explicabo incidunt minus numquam officiis pariatur repudiandae sequi.</p>
                                    <br/><br/>
                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>

                                </div>
                                <div className="owl-content first">
                                    <i className="fas fa-circle fa-3x"></i>
                                    <h4>Alex Mwangi</h4>
                                    <br/>
                                    <p>Lorem ipsum dolor sit.</p>
                                    <br/><br/>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cum earum explicabo incidunt minus numquam officiis pariatur repudiandae sequi.</p>
                                    <br/><br/>
                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>

                                </div>
                                <div className="owl-content second">
                                    <i className="fas fa-circle fa-3x"></i>
                                    <h4>Alex Mwangi</h4>
                                    <br/>
                                    <p>Lorem ipsum dolor sit.</p>
                                    <br/><br/>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cum earum explicabo incidunt minus numquam officiis pariatur repudiandae sequi.</p>
                                    <br/><br/>
                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>

                                </div>
                                <div className="owl-content first">
                                    <i className="fas fa-circle fa-3x"></i>
                                    <h4>Alex Mwangi</h4>
                                    <br/>
                                    <p>Lorem ipsum dolor sit.</p>
                                    <br/><br/>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cum earum explicabo incidunt minus numquam officiis pariatur repudiandae sequi.</p>
                                    <br/><br/>
                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>

                                </div>
                                <div className="owl-content second">
                                    <i className="fas fa-circle fa-3x"></i>
                                    <h4>Alex Mwangi</h4>
                                    <br/>
                                    <p>Lorem ipsum dolor sit.</p>
                                    <br/><br/>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cum earum explicabo incidunt minus numquam officiis pariatur repudiandae sequi.</p>
                                    <br/><br/>
                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>

                                </div>




                            </div>
                            <div className="owl-navigation">
                                <span className="owl-nav-prev"><i className="fas fa-arrow-left"></i></span>
                                <span className="owl-nav-next"><i className="fas fa-arrow-right"></i></span>
                            </div>
                        </div>

                    </div>
                    <br/><br/>
                    <div className="home-blogs">
                        <div className="container">
                            <div className="home-blog-section">
                                <div className="home-blog-section-title">
                                    <h4>Some News</h4>
                                    <br/>
                                    <h2>From Our Blog List</h2>
                                    <br/>
                                    <p>Subscribe today to make sure you don't miss out our amazing offers.</p>
                                    <br/>
                                    <h3><a href="">Discover More</a> </h3>

                                </div>
                                <br/><br/>
                                <div className="home-blog-section-body">
                                    <h2><Link to="/blog">View All Blogs</Link> </h2>
                                    <br/><br/>
                                    {error && <h2>{error}</h2>}
                                    {isPending && <h2>Loading...</h2>}
                                    <div className="blogs-post">
                                        {
                                            posts.map((post)=>{
                                                return(
                                                    <HomeBlogs post={post} key={post.id} />

                                                )
                                            })
                                        }

                                    </div>




                                </div>



                            </div>


                        </div>

                    </div>


                </div>

            </div>
        )
    }
}
// Home.PropTypes={
//     posts:PropTypes.array.isRequired
// }
export default Home