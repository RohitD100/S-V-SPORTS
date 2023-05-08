import './App.css';
import ResponsiveAppBar from './Components/Home';
import { Features } from './Components/Features';
import Footer from './Components/Footer';
import image from "./Picsart_23-05-06_11-15-10-653.jpg"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <img style={{ width: '100%', height: "110vh" }} src={image} alt='poster' />
      <Features />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
