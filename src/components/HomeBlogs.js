import {Component} from 'react'
import {Link} from "react-router-dom";
class HomeBlogs extends Component{
    render(){
        const {id,title,body}=this.props.post;

        return(
            <div className="homeblogs">

                <h4>{title}</h4>
                <br/>
                <p>{body}</p>
                <br/>
                <Link to={`/blogs/${this.props.post.id}`} className="homeblogs-icons" ><i className="fas fa-arrow-right"></i>Read More</Link>
            </div>
        )
    }
}
export default HomeBlogs