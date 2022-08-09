import logo from './logo.svg';
import './App.css';
 import Firsttry  from './Components/Firsttry';
 import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import ClickedFunction from './Components/ClickedFunction';
import EventBinding from './Components/EventBinding';
import GreetingNewUser from './Components/GreetingNewUser';
import ListName from './Components/ListName';
import StyleSheet from './Components/StyleSheet';
import Form from './Components/Form';
import FragmentDemo from './Components/FragmentDemo';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefDemo from './Components/RefDemo';
import ParentRef from './Components/ParentRef';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorHandling from './Components/errorHandling';
import ClickedCounter from './Components/clickedCounter';
import HoverCounter from './Components/hoverCounter';
import ClikedCounterTwo from './Components/ClikedCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CounterTwo from './Components/CounterTwo';
import {UserProvider} from './Components/userContext';
import ComponentC from './Components/ComponentC';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Firsttry name="Karim"></Firsttry>
        <Firsttry name="ahmad"></Firsttry>
        <Firsttry name="shah"></Firsttry>
        <Hello name="Karim" classHero="the best">
          <p>This is for chidren props</p>
        </Hello>
        <Hello name="ahmad" classHero="the good">
          <button className="btn-primary"> Action</button>
        </Hello>
        <Hello name="shah" classHero="the worsed"></Hello> */}
        {/* <Message></Message>
        <Counter></Counter>
        <ClickedFunction></ClickedFunction> */}
        {/* <EventBinding></EventBinding> */}

        <ParentRef></ParentRef>
        <StyleSheet primary={true}></StyleSheet>
        {/* <Form></Form> */}
       {/* <PortalDemo></PortalDemo> */}
       {/* <ErrorHandling>
       <Hero heroName="superman"></Hero>
       <Hero heroName="batman"></Hero>
       <Hero heroName="joker"></Hero>
       </ErrorHandling> */}
       {/* <ClickedCounter></ClickedCounter>
       <HoverCounter></HoverCounter> */}
       {/* <ClikedCounterTwo></ClikedCounterTwo>
       <HoverCounterTwo></HoverCounterTwo>
       <User render= { (isLoggedIn) =>isLoggedIn ?'Kareeeeeem' : 'Guest' }></User> */}
       {/* <CounterTwo render={(count, buttonClickHanlder)=>  (<ClikedCounterTwo count ={count}
        buttonClickHanlder={buttonClickHanlder}></ClikedCounterTwo>)}/>
       <CounterTwo render={(count, buttonClickHanlder)=>  (<HoverCounterTwo count ={count}
        buttonClickHanlder={buttonClickHanlder}></HoverCounterTwo>)}/> */}
        <UserProvider value ="Kareeeemmmmm">
        <ComponentC></ComponentC>
        </UserProvider>
       
      </header>
    </div>
  );
}

export default App;
