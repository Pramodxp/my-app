import { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import AuthenticationService from "./AuthenticationService"

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        // console.log(isUserLoggedIn);
        return (
           <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                    <div><a className="navbar-brand" href="http://www.in28minuites.com">in28Minuites</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link to="/welcome/pramod" className="nav-link">Home</Link></li>}
                        {isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggedIn && <li><Link to="/logout"className="nav-link" onClick={AuthenticationService.logOut}>Logout</Link></li>}
                    </ul>
                </nav>
           </header>
        )
    }
}

export default withRouter(HeaderComponent);