import { Component } from "react"
import AuthenticationService from "./AuthenticationService"

class LogInComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            userName: 'pramod',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
            }
        this.handleChange = this.handleChange.bind(this)
        this.loinClicked = this.loinClicked.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    loinClicked(){
        // username : pramod ,password= dummy
        // console.log(this.state)
        if(this.state.userName==='pramod' && this.state.password==='dummy'){
            console.log('successful')
            AuthenticationService.registerSuccessfulLogin(this.state.userName)
            this.props.history.push(`/welcome/${this.state.userName}`)
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
            console.log('failed')
        }
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="Container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSuccessful showSuccessMessage={this.state.showSuccessMessage}/> 
               
                lets use && operator */}

                {this.state.hasLoginFailed &&  <div className="alert alert-warning">Invalid Credentials</div>}
                {/* {this.state.showSuccessMessage &&  <div>LogIn Successful</div>} */}
                User Name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loinClicked}>Login</button>
                </div>
            </div>)
    }

   

    handleChange(event){
        // console.log(this.state) //this gives the value which is being canged. so we need to set it to state.
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }
}

export default LogInComponent