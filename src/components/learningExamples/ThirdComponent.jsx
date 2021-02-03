import { Component } from "react";

class ThirdComponent extends Component{
    render(){
    return(
    <div className="ThirdComponent">
        Third Component
    </div>
    );
    }
}

export function FourthComponent(){
    return(
      <div className="FourthComponent">
        Fourth Component
      </div>
      );
  }

  export default ThirdComponent;