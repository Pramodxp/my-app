import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
        console.log("executed HelloWorldService")
        // what we are returning down is Promise
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService(){
        console.log("executed HelloWorldBeanService")
        // what we are returning down is Promise
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name){
        console.log("executed HelloWorldPath variable Service")
        // what we are returning down is Promise
        return axios.get(`http://localhost:8080//hello-world/path-variable/${name}`);
    }

}

export default new HelloWorldService()