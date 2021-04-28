import {Link, useParams} from 'react-router-dom'

import {useState,useEffect} from 'react'
import axios from "axios";

const BlogDetails =()=>{

    const [post,setPost]=useState(null);
    const [error,setError]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const {id}=useParams()

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`https://jsonplaceholder.typicode.com/posts/`+id)
                .then(res=>{
                    if(!res.ok){
                        throw Error('Sorry! could not fetch Blog Post Details');

                    }
                    return res.json()
                })
                .then(data=>{
                    setPost(data)
                    setError(null)
                    setIsPending(false)

                }).catch(err=>{

                    setError(err.message);
                setIsPending(false)

            })




        },1000)
    },[])

    return (
        <div>

            <div className="header notfound-header">
                <div className="header-nav">
                    <div className="container">

                        <div className="branding">
                            <h3><Link to="/">My<span className="branding-head">Mobi</span></Link></h3>
                        </div>
                        <nav  className="main-nav"   >
                            <ul className="nav-links" >
                                <li><Link to="/">Home</Link> </li>
                                <li ><Link to="/about">About Us</Link> </li>
                                <li className="blog-active"><Link to="/blog">Blog</Link> </li>
                                <li ><Link to="/contact" >Contact us</Link> </li>

                            </ul>
                            <div className="nav-right">
                                <a href=""><i className="fas fa-search"></i></a>
                                <a href=""><span>ENG <i className="fas fa-caret-down"></i></span></a>
                                <a href=""><i className="fas fa-bars"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="notfound-showcase">

                    <div className="container">
                        <div className="notfound-showcase-header">
                            <h2>Explore Our Blog Posts</h2>
                            <br/>
                            <h1>And leave Your Comments Today </h1>


                        </div>
                    </div>

                </div>
                <br/><br/><br/><br/>




            </div>
            <br/><br/>
            <div className="container">
                <div className="BlogDetails">
                    <div className="blog-details-left">
                        {error && <h2>{error}</h2>}
                        {isPending && <h2>Loading....</h2>}
                        <br/><br/>
                        {post && (
                            <article>
                                <h2 className="blogdetails-title">{post.title}</h2>
                                <br/>
                                <span><i className="fas fa-calendar-alt"></i>March 28,2021</span>
                                <br/><br/>
                                <div className="blogdetails-body">{post.body}</div>
                                <br/><br/>

                                <Link to="/blog">View All Blogs</Link>
                            </article>
                        )}
                    </div>
                    <div className="blog-details-right">
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

            <div className="share-about">
                <div className="container">
                    <div className="share-about1">
                        <div className="left-share">
                            <i className="fa-3x fas fa-circle"></i>
                            <br/>
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
            <div className="comments">
                <div className="container">
                    <div className="comments-section">
                        <div className="comment1 new">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <br/>
                            <a href="">Read More</a>
                        </div>
                        <div className="comment2 new">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <br/>
                            <a href="">Read More</a>
                        </div>
                        <div className="comment3 new">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <br/>
                            <a href="">Read More</a>
                        </div>

                    </div>
                    <br/><br/>
                    <div className="people-comments ">
                        <h3><span>3</span>Comments on this Post</h3>
                        <br/><br/>
                        <div className="comments1 cmts">
                            <span className="span1">AM</span>
                            <div className="comments-body">
                                <h4>Alex Mwangi</h4>
                                <p>27 March 2021</p>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                <p>Industry.</p>
                                <br/>
                                <a href="">Reply</a>

                            </div>


                        </div>
                        <div className="comments2 cmts center">
                            <span className="span1">EM</span>
                            <div className="comments-body">

                                <h4>Eunice Mwangi</h4>
                                <p>27 March 2021</p>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                <p>Lorem. Industry.</p>
                                <br/>
                                <a href="">Reply</a>

                            </div>


                        </div>
                        <div className="comments3 cmts">
                            <span className="span1">PM</span>
                            <div className="comments-body">
                                <h4>Philip Mwangi</h4>
                                <p>27 March 2021</p>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                <p>Industry.</p>
                                <br/>
                                <a href="">Reply</a>

                            </div>


                        </div>

                    </div>

                </div>
                <div className="comment-form">
                    <h2>Leave a Comment</h2>
                    <br/><br/>
                    <form className="contact-us-form">
                        <div className="row1">
                            <div className="name">
                                <input type="text" placeholder="Name*"/>

                            </div>
                            <div className="email">
                                <input type="email" placeholder="Your Email Address*"/>

                            </div>

                        </div>
                        <br/>
                        <textarea placeholder="Message*"/>
                        <br/><br/>

                        <button className="contact-btn">Send Comment</button>

                    </form>

                </div>

            </div>


        </div>


    )
}
export default BlogDetails