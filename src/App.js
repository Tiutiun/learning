import logo from "./logo.svg";
import "./App.css";
import "modern-normalize";
import MovieDetails from "./pages/movie-details/MovieDetails";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { useState } from "react";
import Router from "./components/Router/Router";

const sum = (a, b) => {
  return a + b;
};
const result = sum(4, 6);
console.log(result);

const App = () => {
  const [isShowHomePage, setIsHomeShowPage] = useState(true);

  const handleSwitchPage = () => {
    setIsHomeShowPage((prev) => !prev);
  };

  return (
    <div className="app">
      <Header onSwitchPage={handleSwitchPage} />
      <div className="container">
        <Router />
        {/* {isShowHomePage ? (
          <Home onSwitchPage={handleSwitchPage} />
        ) : (
          <MovieDetails />
        )} */}

        {/* <Home /> */}
      </div>
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="app">
//       <div className="container">
//         <ul className="list">
//           {Films.map((film) => {
//             return(
//               <li key={film.div}>
//                 <Card />
//               </li>
//             )
//           }

//           )}
//         </ul>
//       </div>
//     </div>

//   )
// }
// export default App;
