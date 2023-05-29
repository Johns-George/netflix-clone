import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Rowfile from "./components/Row/Rowfile";
import { apikey } from "../src/constants/constants";
function App() {
  return (
    <div className="netflix" id="homebutton">
      <Navbar />
      <Banner />
      <Rowfile
        id="act"
        classn="photo"
        title={"Action"}
        url={`discover/movie?api_key=${apikey}&with_genres=28`}
      />
      <Rowfile
        id="netflixorig"
        classn="smallphoto"
        title={"Netflix Originals"}
        url={`discover/tv?api_key=${apikey}&with_networks=213`}
      />
      <Rowfile
        id="comedy"
        classn="smallphoto"
        title={"Comedy"}
        url={`discover/movie?api_key=${apikey}&with_genres=35`}
      />
    </div>
  );
}

export default App;
