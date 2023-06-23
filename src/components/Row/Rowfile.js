import React, { useEffect, useState } from "react";
import "./Rowfile.css";
import { imgurl, apikey } from "../../constants/constants";
import axios from "../../components/axios";
import YouTube from "react-youtube";
function Rowfile(props) {
  const [Movies, setMovies] = useState([]);
  let timerId = ''

  useEffect(() => {
    axios.get(props.url).then((Response) => {
      setMovies(Response.data.results);
    });

    return () => {
      clearTimeout(timerId)
    }
  }, []);

  const [urlid, seturlid] = useState("");
  
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const HandileClickMovie = (id) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    const newtimerId = setTimeout(() => {

      axios
      .get(`movie/${id}/videos?api_key=${apikey}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          seturlid(response.data.results[0]);
        } else {
          console.log("empty");
        }
      });
    }, 1000)

    timerId = newtimerId
  };

  return (
    <div className="row" id={props.id}>
      <h2>{props.title}</h2>
      <div className="img">
        {Movies.map((obj) => (
          <img
            onMouseEnter={() => HandileClickMovie(obj.id)}
            className={props.classn}
            src={imgurl + obj.backdrop_path}
            alt="Posters"
          />
        ))}
      </div>
      \{urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  );
}

export default Rowfile;
