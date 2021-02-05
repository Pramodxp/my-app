import { Component } from "react"
import TodoDataService from "../../../api/TodoDataService"
import AuthenticationService from "./AuthenticationService"

class ListTodosComponent extends Component{
   
    constructor(props){
        super(props)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refereshTodos = this.refereshTodos.bind(this)
        console.log("constructor")
        this.state = {
            todos : [
                // {id : 1, description: 'Learn React', done : false ,targetDate: new Date()},
                // {id : 2, description: 'Become an Expert',done : false ,targetDate: new Date()},
                // {id : 3, description: 'Visit india',done : false ,targetDate: new Date()}
            ],
            message : null
        } 
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate")
        console.log(nextProps)
        console.log(nextState)
        // return false // it will not allow the screen to render, this will not allow the updated state to render
        return true
    }

    //it is called after rendering the screen, here we need to call the api.
    componentDidMount(){
        console.log("componentDidMount")
        this.refereshTodos()
    }

    refereshTodos(){
        let userName = AuthenticationService.getLoggedInUserName()
        TodoDataService.retriveAllTodos(userName)
        .then(
             response => {
                this.setState ({
                    todos : response.data
                })
             }
        )
    }

    deleteTodoClicked(id){
        let userName = AuthenticationService.getLoggedInUserName()
        // console.log(id+" "+ userName)
        TodoDataService.deleteTodo(userName, id)
        .then(
            response => {
                this.setState({message :  `delete of todo ${id}`})
                this.refereshTodos()
            }
        )
    }

    updateTodoClicked(id){
        // let userName = AuthenticationService.getLoggedInUserName()
        this.props.history.push(`/todos/${id}`)
        // console.log("update clicked")
        // TodoDataService.deleteTodo(id)
        // .then(
        //     response => {
        //         this.setState({message :  `delete of todo ${id}`})
        //         this.refereshTodos()
        //     }
        // )
    }

    render(){
        console.log("render")
        return (
       <div>
            <h1>List Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>isCompleted</th>
                            <th>Target Date</th>
                            <th>update</th>
                            <th>Delete</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr> 
                            )
                        } 
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default ListTodosComponent