import {useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import BlogPosts from "./BlogPosts";
const Blog=()=>{
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null)

    useEffect(()=>{
        setTimeout(()=>{
             fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(res=>{
                    if (!res.ok){
                        throw Error('Sorry! Could not fetch Blog Posts')
                    }
                    return res.json()
                })
                .then(data=>{
                    setPosts(data)
                    setLoading(false)

                }).catch(err=>{
                    setError(err.message)
                setLoading(false)

            })
        },1000)
    },[])
        return(
            <div>
                <div className="header blog-header">
                    <div className="header-nav">
                        <div className="container">

                            <div className="branding">
                                <h3><Link to="/">My<span className="branding-head">Mobi</span></Link></h3>
                            </div>
                            <nav  className="main-nav"  >
                                <ul className="nav-links">
                                    <li><Link to="/">Home</Link> </li>
                                    <li><Link to="/about">About Us</Link> </li>
                                    <li className="blog-active"><Link to="/blog">Blog</Link> </li>
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
                            <div className="blog-header-content  ">
                                <span>Read Blog</span>
                                <br/><br/> <br/>
                                <h2>Checkout Our Latest</h2>
                                <br/>
                                <h1>Blog List</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="our-blog-posts">
                        <div className="blog-post-left">
                            { !error && !loading && <h2>Our Blog Posts</h2>}
                            <br/><br/>
                            <div>{loading && <h2>Loading....</h2>}</div>
                            {
                                posts.map((post)=>{
                                   return(
                                       <BlogPosts posts={post} loading={loading}/>
                                   )
                                })
                            }
                            {!error && !loading && <div className="pagination">
                                <span className="number">1</span>
                                <span className="number">2</span>
                                <span className="number">3</span>
                                <span className="number">4</span>
                                <span className="dot1">.</span>
                                <span className="dot1">.</span>
                                <span className="dot1">.</span>
                                <span className="dot1">.</span>
                                <span><i className="fas fa-chevron-left"></i></span>
                                <span><i className="fas fa-chevron-right"></i></span>

                            </div>}
                            {error && <h2>{error}</h2>}

                        </div>
                        <div className="blog-post-right">
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
        )



}
export default Blog