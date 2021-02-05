class AuthenticationService{

    registerSuccessfulLogin(username,password){
        console.log("Authentication is called")
        sessionStorage.setItem('authenticatedUser',username);
    }

    logOut(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let  user = sessionStorage.getItem('authenticatedUser')
        if(user === null)
        return false
        else
        return true
    }

    getLoggedInUserName(){
        let  user = sessionStorage.getItem('authenticatedUser')
        if(user===null)return ''
        return user
    }


}

export default new AuthenticationService()