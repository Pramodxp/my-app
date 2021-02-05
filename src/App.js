import './App.css';
// import FirstComponent,{SecondComponent} from './components/learningExamples/FirstComponent';
// import ThirdComponent, {FourthComponent} from './components/learningExamples/ThirdComponent';
import TodoApp from './components/learningExamples/todo/TodoApp'
import './bootstrap.css'


function App() {
  return (
    <div className="App">
     {/* <Counter/> */} 
     <TodoApp/>
    </div>
  );
}

// function LearningComponent() {
//   return (
//     <div className="App">
//      Hi this is my first java-script react application.
//     <FirstComponent/>
//     <SecondComponent/>
//     <ThirdComponent/>
//     <FourthComponent/>
//     </div>
//   );
// }


// we are creating class component, to create, it must extend Component class and must Override or Implemet render() method/Function.
// class FirstComponent extends Component{
//   render(){
//     return(
//     <div className="FirstComponent">
//       First Component
//     </div>
//     );
//   }
// }

//class component
// class SecondComponent extends Component{
//   render(){
//     return(
//     <div className="SecondComponent">
//       Second Component  Component
//     </div>
//     );
//   }
// }

//class component
// class ThirdComponent extends Component{
//   render(){
//     return(
//     <div className="ThirdComponent">
//       Third Component
//     </div>
//     );
//   }
// }

//insted of creating Simple components as class components we can go for function component insted of class component.
//additional feature of class component is , it has some more features like holding state etc.

//function Component
// function ThirdComponent(){
//   return(
//     <div className="ThirdComponent">
//       Third Component
//     </div>
//     );
// }

//function Component
// function FourthComponent(){
//   return(
//     <div className="FourthComponent">
//       Fourth Component
//     </div>
//     );
// }

export default App;
