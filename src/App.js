import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import SlideShowBar from './layout/SlideShowBar';
import KeyFeatures from './layout/KeyFeatures';
import NextBigCex from './layout/NextBigCex';
import TokenUsage from './layout/TokenUsage';
import Archivements from './layout/Archivements';
import SubscribePage from './layout/SubscribePage';
import Footer from './layout/Footer';
import RoadMap from './layout/RoadMap';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <SlideShowBar/>
      <KeyFeatures/>
      <NextBigCex/>
      <RoadMap/>
      <TokenUsage/>
      <Archivements/>
      <SubscribePage/>
      <Footer/>
    </div>
  );
}

export default App;
