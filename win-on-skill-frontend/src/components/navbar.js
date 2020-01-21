import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
export default class NavBar extends Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to='/' className="navbar-brand">Win On Skill</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/Games' className="nav-item nav-link active" href="">Games <span className="sr-only">(current)</span>
                            </Link>
                            <Link to='/Quiz' className="nav-item nav-link" href="">Quiz
                            </Link>
                            <Link to='/Updates' className="nav-item nav-link" href="">Updates
                            </Link>
                            <Link to='/Profile' className="nav-item nav-link" href="">Profile
                            </Link>
                            
                            
                        </div>
                    </div>
                    <h4 className="navbar-brand">WIN ON SKILL</h4>
                </nav>
           </React.Fragment>
        )
    }
}