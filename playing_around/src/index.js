import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
// //1. sjove ting
// function formatName(user) {
//     return user.firstName + " " + user.lastName;
// }

// function getGreeting(user) {
//     if (user) {
//         return "Hello " + formatName(user)
//     }
//     return <h1>Hello, Stranger.</h1>
// }

// const user = {
//     firstName: "Mads",
//     lastName: "Nielsen"
// }

// function tick(){
//     const element = (
//         <div>
//             <h1>{getGreeting(user)}</h1>
//             <h2>Hope you like sleep 🥱😴</h2>
//             <h3>It is this date {new Date().toLocaleTimeString()}.</h3>
//         </div>
//     );
//     root.render(element);
// }
// setInterval(tick ,1000);

// //2. sjove ting
// function Welcome(props){
//     return <h1>Hello, {props.name} </h1>
// }
// function App() {
//     return (
//         <div>
//             <Welcome name = "Peter"/>
//             <Welcome name = "Hans"/>
//             <Welcome name = "Gustav"/>
//         </div>
//     )
// }
// root.render(<App />)

// //3. Sjove ting
// function FormattedDate(props) {
//     return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
//   }

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()}
//     }
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             100
//         )
//     }

//     componentWillUnmount(){
//         clearInterval(this.timerID)
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hi mom</h1>
//                 <FormattedDate date={this.state.date}/>
//             </div>
//         )
//     }
// }

// function App() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     )
// }

// //root.render(<App/>)
// // 4. sjove ting
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {isToggleOn: true}
//         this.handdleClick = this.handdleClick.bind(this)
//     }

//     handdleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }))
//     }

//     render() {
//         return (
//             <button onClick={this.handdleClick}>
//                 {this.state.isToggleOn ? "ON" : "OFF"}
//             </button>
//         )
//     }
// }

// class LoggingButton extends React.Component {
//     handdleClick = () => {
//         console.log("this is:", this)
//     }
//     render() {
//         return(
//             <button onClick={this.handdleClick}>
//             Click me
//             </button>
//         )
      
//     }
// }

// function App() {
//     return (
//         <div>
//             <Toggle/>
//             <LoggingButton/>
//         </div>
//     )
// }

// root.render(<App/>)

// // 4. sjove ting
// class LoginControl extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleLoginClick = this.handleLoginClick.bind(this);
//       this.handleLogoutClick = this.handleLogoutClick.bind(this);
//       this.state = {isLoggedIn: false};
//     }
  
//     handleLoginClick() {
//       this.setState({isLoggedIn: true});
//     }
  
//     handleLogoutClick() {
//       this.setState({isLoggedIn: false});
//     }
  
//     render() {
//       const isLoggedIn = this.state.isLoggedIn;
//       let button;
  
//       if (isLoggedIn) {
//         button = <LogoutButton onClick={this.handleLogoutClick} />;
//       } else {
//         button = <LoginButton onClick={this.handleLoginClick} />;
//       }
  
//       return (
//         <div>
//           <Greeting isLoggedIn={isLoggedIn} />
//           {button}
//         </div>
//       );
//     }
//   }
  
// function UserGreeting(props) {
// return <h1>Welcome back!</h1>;
// }
  
// function GuestGreeting(props) {
// return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
// const isLoggedIn = props.isLoggedIn;
// if (isLoggedIn) {
//     return <UserGreeting />;
// }
// return <GuestGreeting />;
// }

// function LoginButton(props) {
// return (
//     <button onClick={props.onClick}>
//     Login
//     </button>
// );
// }

// function LogoutButton(props) {
// return (
//     <button onClick={props.onClick}>
//     Logout
//     </button>
// );
// }

// root.render(<LoginControl />);

// // 5. sjove ting
// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages
//     return (
//         <div>
//             <h1>
//                 Hi mom!
//             </h1>
//             {unreadMessages.length > 0 && 
//             <h2>
//                 You have {unreadMessages.length} unread messages.
//             </h2>
//             }
//         </div>
//     )
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];

// root.render(<Mailbox unreadMessages={messages} />);

// // 6. sjove ting doesn't have the css though
// function WarningBanner(props){
//     if (!props.wan){
//         return null
//     }

//     return (
//         <div className='warning'>
//             Warning!
//         </div>
//     )
// }

// class Page extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {showWarning: true}
//         this.handleToggleClick = this.handleToggleClick.bind(this)
//     }

//     handleToggleClick() {
//         this.setState( state => ({
//             showWarning: !state.showWarning
//         }))
//     }

//     render(){
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning}/>
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? "Hide" : "Show"}
//                 </button>
//             </div>
//         )
//     }
// }

// root.render(<Page/>)

// 7. sjove ting
// function ListItem(props){
//     return <li>{props.value}</li>
// }

// function NumberList(props){
//     const numbers = props.numbers
//     const listItems = numbers.map((number) =>
//         <ListItem key={number.toString()} value={number} />
//     )
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// }

// const numbers = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]
// root.render(<NumberList numbers={numbers}/>)

// // 8. sjove ting
// function Blog(props) {
//     const sidebar = (
//       <ul>
//         {props.posts.map((post) =>
//           <li key={post.id}>
//             {post.title}
//           </li>
//         )}
//       </ul>
//     );
//     const content = props.posts.map((post) =>
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//     return (
//       <div>
//         {sidebar}
//         <hr />
//         {content}
//       </div>
//     );
//   }
  
//   const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];
  

//   root.render(<Blog posts={posts} />);

// // 9. Sjove ting
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {value: ""}

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value})
//     }

//     handleSubmit(event) {
//         alert("A name was submitted: " + this.state.value)
//         event.preventDefault()
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                 </label>
//                 <input type="submit" value={"Submit"} />
//             </form>
//         )
//     }
// }

// root.render(<NameForm/>)
// // 10. Sjove ting
// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {value: "coconut"}

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event){
//         this.setState({value: event.target.value})
//     }
//     handleSubmit(event){
//         alert("the fruit you chose was: " + this.state.value)
//         event.preventDefault()
//     }

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Pick a fruit:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">Grapefruit</option>
//                         <option value="lime">Lime</option>
//                         <option value="coconut">Coconut</option>
//                         <option value="mango">Mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
        
//     }
// }

// root.render(<FlavorForm></FlavorForm>)

// // 11. Sjove ting
// class Reservation extends React.Component {
//     constructor(props) {
//         super(props)
//             this.state = {
//                 isGoing: true,
//                 numberOfGuests: 2
//             }
        
//         this.handleInputChange = this.handleInputChange.bind(this)
//     }

//     handleInputChange(event) {
//         const target = event.target
//         const value = target.type === "checkbox" ? target.checked : target.value
//         const name = target.name

//         this.setState({
//             [name]: value
//         })
//     }

//     render(){
//         return (
//             <form>
//                 <label>
//                     Is going:
//                     <input
//                     name="isGoing"
//                     type="Checkbox"
//                     checked={this.state.isGoing}
//                     onChange={this.handleInputChange} />
//                 </label>
//                 <br></br>
//                 <label>
//                     Number of guests:
//                     <input
//                     name="numberOfGuests"
//                     type="number"
//                     value={this.state.numberOfGuests}
//                     onChange={this.handleInputChange} />
//                 </label>
//             </form>
//         )
//     }
// }

// root.render(<Reservation></Reservation>)

// // 12. sjove ting 

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
//   };
  
//   function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
  
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
  
//   function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }
  
//   function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//       return <p>The water would boil 🤣.</p>;
//     }
//     return <p>The water would not boil 😅.</p>;
//   }
  
//   class TemperatureInput extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     handleChange(e) {
//       this.props.onTemperatureChange(e.target.value);
//     }
  
//     render() {
//       const temperature = this.props.temperature;
//       const scale = this.props.scale;
//       return (
//         <fieldset>
//           <legend>Enter temperature in {scaleNames[scale]}:</legend>
//           <input value={temperature}
//                  onChange={this.handleChange} />
//         </fieldset>
//       );
//     }
//   }
  
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }
  
// root.render(<Calculator></Calculator>)

// // 13. sjove ting
// function FancyBorder(props) {
//   return (
//     <div ckassName={"Fancyborder Fancyborder-" + props.color}>
//       {props.children}
//     </div>
//   )
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className='Dialog-title'>
//         Hi mom
//       </h1>
//       <p className='Dialog-message'>
//         Thank you for visiting mom
//       </p>
//     </FancyBorder>
//   )
// }

// root.render(<WelcomeDialog></WelcomeDialog>)

// // 14. sjove ting
// function Contacts() {
//   return <div className="Contacts" />;
// }

// function Chat() {
//   return <div className="Chat" />;
// }

// function SplitPane(props) {
//   return(
//     <div className='SplitPane'>
//       <div className='SplitPaneleft'>
//         {props.left}
//       </div>
//       <div className='SplitPane-right'>
//         {props.right}
//       </div>
//     </div>
//   )
// }

// function App(){
//   return (
//     <SplitPane
//       left={
//         <Contacts/>
//       }
//       right={
//         <Chat />
//       } />
//   )
// }
// root.render(<App></App>)

// Todo list

function ListItem(props){
  return <li>{props.value}</li>
}

function TodoListfunc(props) {
  const todo = props.todolist
  const listItems = todo.map((item) =>
    <ListItem key={item} value ={item}/>
  )
  return (
    <ul>
      {listItems}
    </ul>
  )
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: "", todolist: []};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          todo:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type={"submit"} value={"Submit"} onClick={(e) => {
            e.preventDefault()
            this.props.handleSubmit(this.state.value)
          }}/>
      </form>
    )
  }
}

function App(){
    const [todoList,setTodoList] = React.useState([])
    const handleSubmit = (value) => {
      setTodoList([...todoList, value])
  }

  return(
    <div>
      <TodoList handleSubmit={handleSubmit}></TodoList>
      <TodoListfunc todolist={todoList}/>
    </div>
  )
}

root.render(<App></App>)