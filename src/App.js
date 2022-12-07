import './App.css';
import HeroPage from './Components/HeroPage/HeroPage';
import Features from "./Components/Features/Features";
import Cta from './Components/Cta/Cta';
import BookFlight from './Components/BookFlight/BookFlight';

function App() {
  return (
    <div>
      <HeroPage/>
      <Features/>
      <Cta/>
      <BookFlight/>
    </div>
  );
}

export default App;
