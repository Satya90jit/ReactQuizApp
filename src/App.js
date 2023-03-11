import "./sass/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from './Quiz';
import Start from './Start';
import Result from "./Result";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/start" element={<Start/>} />
        <Route path="/Result" element={<Result/>} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
