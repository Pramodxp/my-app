import { Component } from "react"
import { Link } from "react-router-dom"
import HelloWorldService from "../../../api/todo/HelloWorldService"

class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            welcomeMessage : '',
            isError : false
        }
    }

    render(){
        return (
            <>
                <h1>Welcome</h1>
                {!this.state.isError && <div className="container">
                    Welcome {this.props.match.params.name} you can manage your todos<Link to="/todos"> here </Link>
                </div>}
                {this.state.isError && <div className="container">
                    {this.state.welcomeMessage}
                </div>}
                <div className="container">
                    click Here to get customized welcome message
                    <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get welcome Message</button>

                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                    {this.state.errorMessage}
                </div>  
            </>
        )
    }

    retriveWelcomeMessage = () =>{
        // console.log(" in retriveWelcomeMessage")
        // HelloWorldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response) )

        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response) )

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then( response => this.handleSuccessfulResponse(response) )
        .catch( error => this.handleError(error) )
    }

    handleSuccessfulResponse(response){
        console.log(response)
        // this.setState({
        //     welcomeMessage : response.data
        // })
        this.setState({
            isError: false,
            welcomeMessage : response.data.message
        })
    }

    handleError(error){
        console.log(error.response)
        this.setState({
            isError : true,
            welcomeMessage : error.response.data.message
        })
    }

}

export default WelcomeComponent