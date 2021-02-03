import { Component } from 'react';

//if we want the access of this class in other modules then we must export them using export Kryword.
// for a module there can be one export default
// we can have multiple exports from the module but all of them cannot be default, but can be export for those 
// while importing they need to be included in the{} 
 class FirstComponent extends Component{
    render(){
      return(
      <div className="FirstComponent">
        First Component
      </div>
      );
    }
  }

  export class SecondComponent extends Component{
    render(){
      return(
      <div className="SecondComponent">
        Second Component  Component
      </div>
      );
    }
  }
  
  export default FirstComponent;