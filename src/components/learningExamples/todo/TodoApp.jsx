import { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './TodoApp.css';
import AuthenticatedRoute from "./AuthenticatedRoute";
import HeaderComponent from "./HeaderComponent";
import LogInComponent from "./LogInComponent";
import ListTodosComponent from "./ListTodosComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";

class TodoApp extends Component{
render(){
    return(
        <div>
            <Router>
                <HeaderComponent/>
                <Switch>
                    <AuthenticatedRoute path="/" exact component={LogInComponent}/>
                    <Route path="/login" component={LogInComponent}/>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    <Route path="" exact component={ErrorComponent}/>

                </Switch>
                <FooterComponent/>
            </Router>
            {/* <LogInComponent/>
            <WelcomeComponent/> */}
        </div>
    )
}
}

export default TodoApp