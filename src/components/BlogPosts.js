import {Component} from 'react'
import {Link} from "react-router-dom";

 class  BlogPosts extends Component{

    render() {
        const {title,body}=this.props.posts
        const {loading}=this.props.loading

        if (loading){
            return <h2>Loading....</h2>

        }

        return(
            <div>

                <div className="BlogPosts ">


                    <div className="blogs">
                        <span><i className="fas fa-calendar-alt  new11"></i>March 28,2021</span>
                        <br/><br/>
                        <h3>{title}</h3>
                        <br/>
                        <p>{body}</p>
                        <br/><br/><br/>
                        <Link to={`/blogs/${this.props.posts.id}`}>Explore More</Link>
                        <br/><br/>

                    </div>


                </div>



            </div>



        )

    }



}
export default BlogPosts