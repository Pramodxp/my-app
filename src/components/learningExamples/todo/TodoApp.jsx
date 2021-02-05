import { Component } from "react";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import './TodoApp.css';
import AuthenticatedRoute from "./AuthenticatedRoute";
import HeaderComponent from "./HeaderComponent";
import LogInComponent from "./LogInComponent";
import ListTodosComponent from "./ListTodosComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";

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
                    <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/> {/* /todos/:id insted of this /todos will be rendering because it has the higher priority
                    so /todos/:id has been moved up*/}
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