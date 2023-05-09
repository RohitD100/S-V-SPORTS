import './App.css';
import ResponsiveAppBar from './Components/Navbar/Home.jsx'
import { Features } from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import { Mainbanner } from './Components/Banner/Mainbanner';


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
