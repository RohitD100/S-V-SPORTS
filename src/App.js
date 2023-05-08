import './App.css';
import ResponsiveAppBar from './Components/Home';
import { Features } from './Components/Features';
import Footer from './Components/Footer';
import { Mainbanner } from './Components/Mainbanner';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Mainbanner/>
      <Features />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
