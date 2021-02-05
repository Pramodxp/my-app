import axios from "axios";

class TodoDataService{

    retriveAllTodos(name){
        // console.log("executed Service")
        // what we are returning down is Promise
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }
}

export default new TodoDataService()