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

// class HeaderComponent extends Component{
//     render(){
//         const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
//         // console.log(isUserLoggedIn);
//         return (
//            <header>
//                <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
//                     <div><a className="navbar-brand" href="http://www.in28minuites.com">in28Minuites</a></div>
//                     <ul className="navbar-nav">
//                         {isUserLoggedIn && <li><Link to="/welcome/pramod" className="nav-link">Home</Link></li>}
//                         {isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
//                     </ul>
//                     <ul className="navbar-nav navbar-collapse justify-content-end">
//                     {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
//                         {isUserLoggedIn && <li><Link to="/logout"className="nav-link" onClick={AuthenticationService.logOut}>Logout</Link></li>}
//                     </ul>
//                 </nav>
//            </header>
//         )
//     }
// }

// class FooterComponent extends Component{
//     render(){
//         return (
//         <footer className="footer">
//             <span className="text-muted">All Rights Reserved 2020 @pramodxp</span>
//         </footer>
//         )
//     }
// }

// class LogoutComponent extends Component{
//     render(){
//         return (
//         <>
//             <h1>You areLogged Out</h1>
//             <div className="container">
//                 Thank you for using Our Application
//             </div>
//         </>
        
//         )
//     }
// }

// class WelcomeComponent extends Component{
//     render(){
//         return (
//             <>
//                 <h1>Welcome</h1>
//                 <div className="container">
//                 Welcome {this.props.match.params.name} you can manage your todos<Link to="/todos"> here </Link>
//                 </div>
//             </>
//         )
//     }
// }

// class ListTodosComponent extends Component{
   
//     constructor(props){
//         super(props)
//         this.state = {
//             todos : [
//                 {id : 1, description: 'Learn React', done : false ,targetDate: new Date()},
//                 {id : 2, description: 'Become an Expert',done : false ,targetDate: new Date()},
//                 {id : 3, description: 'Visit india',done : false ,targetDate: new Date()}
//             ]
//         } 
//     }

//     render(){
//         return (
//        <div>
//             <h1>List Todos</h1>
//             <div className="container">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Description</th>
//                             <th>isCompleted</th>
//                             <th>Target Date</th>
//                         </tr>  
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.todos.map(
//                                 todo =>
//                                 <tr key={todo.id}>
//                                     <td>{todo.description}</td>
//                                     <td>{todo.done.toString()}</td>
//                                     <td>{todo.targetDate.toString()}</td>
//                                 </tr> 
//                             )
//                         } 
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         )
//     }
// }

// class LogInComponent extends Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             userName: 'pramod',
//             password: '',
//             hasLoginFailed: false,
//             showSuccessMessage: false
//             }
//         this.handleChange = this.handleChange.bind(this)
//         this.loinClicked = this.loinClicked.bind(this)
//         // this.handlePasswordChange = this.handlePasswordChange.bind(this)
//     }

//     loinClicked(){
//         // username : pramod ,password= dummy
//         // console.log(this.state)
//         if(this.state.userName==='pramod' && this.state.password==='dummy'){
//             console.log('successful')
//             AuthenticationService.registerSuccessfulLogin(this.state.userName)
//             this.props.history.push(`/welcome/${this.state.userName}`)
//             this.setState({showSuccessMessage:true})
//             this.setState({hasLoginFailed:false})
//         }
//         else{
//             this.setState({showSuccessMessage:false})
//             this.setState({hasLoginFailed:true})
//             console.log('failed')
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Login</h1>
//                 <div className="Container">
//                 {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
//                 <ShowLoginSuccessful showSuccessMessage={this.state.showSuccessMessage}/> 
               
//                 lets use && operator */}

//                 {this.state.hasLoginFailed &&  <div className="alert alert-warning">Invalid Credentials</div>}
//                 {/* {this.state.showSuccessMessage &&  <div>LogIn Successful</div>} */}
//                 User Name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
//                 Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//                 <button className="btn btn-success" onClick={this.loinClicked}>Login</button>
//                 </div>
//             </div>)
//     }

   

//     handleChange(event){
//         // console.log(this.state) //this gives the value which is being canged. so we need to set it to state.
//         this.setState(
//             {
//                 [event.target.name] : event.target.value
//             }
//         )
//     }

//     // handlePasswordChange(event){
//     //     console.log(event.target.value) //this gives the value which is being canged. so we need to set it to state.
//     //     this.setState({password : event.target.value})
//     // }
    

// }

//function should be created out side the component
// function ShowInvalidCredentials(props){
//         if(props.hasLoginFailed) {
//             return  <div>Invalid Credentials</div>
//         }
//         return null
// }

// function ShowLoginSuccessful(props){
//     if(props.showSuccessMessage) {
//         return  <div>Login Successful</div>
//     }
//     return null
// }

// function ErrorComponent(props){
//     return  <div>An Error occured please contact support team </div>
// }

export default TodoApp