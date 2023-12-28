
import './App.css';
import TicTacToe from './game/TicTacToe';
import title from "./game/images/title.svg";
// import 'animate.css';
function App() {
  return (
    <div className="App">
      <img
        className="title gameTitle animate__animated animate__heartBeat animate__infinite infinite animate__slower"
        src={title}
        alt="tic tac toe"
      />

{/* 
<h1 className="gameTitle animate__animated animate__swing animate__infinite infinite animate__slower">
        TIC TAC TOE GAME
      </h1> */}
      <TicTacToe />
    </div>
  );
}

export default App;
