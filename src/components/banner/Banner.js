import React, { useState, useEffect, useRef } from "react";
import { apikey, imgurl } from "../../constants/constants";
import axios from "../../components/axios";
import "./Banner.css";
function Banner() {
  const [Trend, setTrend] = useState(null);
  let [randomId, setRandomId] = useState(0)

  const output = useRef([])
  
  
  function getData() {
    return axios.get(`trending/all/week?api_key=${apikey}&language=en-US`)
  }

  function BannerNavigate() {
    if (randomId >= output.current.length) {
      return
    }

    setRandomId(val => val + 1)
    console.log(randomId)


    setTrend(output.current[randomId])

    console.log(`New trend is ${JSON.stringify(Trend, null, 2)}`)

  }

  function BannerNavigate2() {
    if (randomId <= 0) {
      return
    }

    setRandomId(val => val - 1)
    console.log(randomId)


    setTrend(output.current[randomId])

    console.log(`New trend is ${JSON.stringify(Trend, null, 2)}`)

  }
  useEffect(() => {
    // if (Trend === null) {
    //   setTrend(output[randomId]);
    // }
    // if (randomId < 20) {
    //   setTrend(output[randomId += 1]);
    // }
    // else {
    //   setRandomId(randomId = 0)
    // }
    // console.log(randomId)

    getData().then((response) => {
      console.log('Initial render')
      output.current = response.data.results
      setTrend(output.current[0])
    })
  }, []);

  return (
    <div
      id="bann"
      className="banner"
      style={{
        backgroundImage: `url(${Trend ? imgurl + Trend.backdrop_path : ""})`,
      }}
    >
      {randomId}
      <button onClick={() => BannerNavigate2()} className="navigate"> <i className='fas fa-angle-left navigat'></i>Go left</button>
      <button onClick={() => BannerNavigate()} className="navigate1"> <i className='fas fa-angle-right navigat'></i>Go right</button>
      <div className="title">
        <h2 className="tit">{Trend ? Trend.title : ""}</h2>
      </div>
      <div className="buttons">
        <button className="button">Play</button>
      </div>
      <div className="description">
        <p className="desc">{Trend ? Trend.overview : " "}</p>
        <p>Length: { output.current.length }</p>
        <p>ID: { randomId }</p>
      </div>
    </div>
  );
}

export default Banner;
