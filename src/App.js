// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Ola mundo <br></br><hr></hr> <h1>React.</h1>{/* Edit <code>src/App.js</code> and save to reload. */}
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;
// import Box from "@mui/material/Box"
// import Header from './components/Header'
// import MainMenu from './components/MainMenu'
// import Sidebar from './components/Sidebar'
// import Content from './components/Content'
// import Footer from './components/Footer'
import Router from './Router'

// const pessoa = {
//   nome: "Serena",
//   idade: 2
// }


const App = () => {
  return (
    <Router />
  )
}
export default App