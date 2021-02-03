import { Component } from "react";
import PropTypes from 'prop-types';
import "./Counter.css";

class Counter extends Component{

  constructor(){
    super(); //if we dont call super it will throw an error
   
    this.state={
        counter:0 // has a state representing counter  -- like instance variable data
    }

   this.increment = this.increment.bind(this)
   this.decrement = this.decrement.bind(this)
   this.reset = this.reset.bind(this)
}

  render(){
    return(
      <div className="counter">
        <CounterButtons by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButtons by={2} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButtons by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>RESET</button>
        </div>
      </div>
      );
    }

    reset() {
      this.setState({counter : 0});
    }

    increment(by){ //update state
      // this.state.counter+1 dont do this 
      // console.log(`in increment of counter ${by}`)
       this.setState( //we need to pass an object to the set state {} in the sense object
          (prevState) => {
              return {counter :  prevState.counter + by}
          }
       )
      }

      decrement(by){ 
         this.setState(
            (prevState) => {
                return {counter :  prevState.counter - by}
            }
         )
        }
      

}


//to add state the component should be class component so.
class CounterButtons extends Component{


    //best practices:
    //1.define an initial state in constructor

    constructor(){
        super(); //if we dont call super it will throw an error
       
      //   this.state={
      //       counter:0
      //   }

      //  this.increment = this.increment.bind(this)
      //  this.decrement = this.decrement.bind(this)
    }

   render(){
    return(
      <div className="Counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button> 
        {/* <span className="count">{this.state.counter}</span> */}
      </div>
      );
    }

    //if the method is inside the class then it should be invoked with the keyword this.
    //if we want to use the state inside the method the method must bind with this, that should eb made in the constructor.
    // increment(){ //update state
    // // this.state.counter+1 dont do this 
    // //  this.setState( //we need to pass an object to the set state {} in the sense object
    // //     //  {
    // //     //     counter :  this.state.counter + this.props.by
    // //     // }
    // //  )
    //  this.props.incrementMethod(this.props.by);
    // }

    // decrement(){
    //   this.props.decrementMethod(this.props.by);
    // }
  }

  //lets create class componwnt insted of function component to make use of State
// function Counter(){
//     return(
//       <div className="Counter">
//         <button onClick={increment}>+1</button> 
//         <span className="count">0</span>
//       </div>
//       );
//   }

  //function can be local to the class component
//   function increment(){
//    console.log('increment')
//   }


//gives the default value to property
Counter.defaultProps = {
  by : 1
}

//specifys the type of values.
Counter.PropsTypes = {
  by : PropTypes.number
}

export default Counter;

  