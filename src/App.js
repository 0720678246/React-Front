import {Component} from 'react'
import './index.css';
import './responsive.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import BlogDetails from './components/BlogDetails'
import NotFound from "./components/NotFound";
import axios from "axios";

class App extends Component {
    state={
        posts:[],
        error:null,
        isPending:true
    };
    getPost=()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
                .then(res=>{
                    if(!res.ok){
                        throw Error('Sorry! Could not fetch Blog Posts');
                    }
                    return res.json();
                })
                .then(data=>{
                    this.setState({posts:data})
                    this.setState({error:null})
                    this.setState({isPending:false})
                }).catch(err=>{
                this.setState({isPending:false})
                this.setState({error:err.message})
            })
            ;
        },1000)


    }

    componentDidMount(){
        this.getPost();
    }
    render(){
        return (
            <Router>
                <div className="App">
                    {/*<Navbar/>*/}
                    <Switch>
                        <Route exact path="/">
                            <Home posts={this.state.posts }
                                  error={this.state.error}
                                  ispending={this.state.isPending}/>

                        </Route>
                        <Route path="/about">
                            <About/>

                        </Route>
                        <Route path="/contact">
                            <Contact/>

                        </Route>
                        <Route path="/blog">
                            <Blog/>

                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails/>

                        </Route>

                        <Route path="*">
                            <NotFound/>

                        </Route>


                    </Switch>
                    <Footer/>


                </div>
            </Router>

        );

    }

}

export default App;
