import React, { useState, useEffect } from "react";
import { apikey, imgurl } from "../../constants/constants";
import axios from "../../components/axios";
import "./Banner.css";
function Banner() {
  const [Trend, setTrend] = useState(null);
  
  const bannernavigate = ()=>{
    setRandomId(randomId+1)
    console.log(randomId)
   }
   const bannernavigate2 = ()=>{
    setRandomId(randomId-1)
   }
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${apikey}&language=en-US`)
      .then((response) => {
       console.log("shhs")
        if (Trend === null) {
          setTrend(response.data.results[randomId]);

        }

        const interval = setInterval(() => {
          setRandomId(Math.floor(Math.random() * 20));



          setTrend(response.data.results[randomId]);
        }, 5000);
       
      
      });
  });

  return (
    <div
      id="bann"
      className="banner"
      style={{
        backgroundImage: `url(${Trend ? imgurl + Trend.backdrop_path : ""})`,
      }}
    >
    <button onClick={()=>bannernavigate()} className="navigate"> <i className='fas fa-angle-left navigat'></i></button>
    <button onClick={()=>bannernavigate2()} className="navigate1"> <i className='fas fa-angle-right navigat'></i></button>
      <div className="title">
        <h2 className="tit">{Trend ? Trend.title : ""}</h2>
      </div>
      <div className="buttons">
        <button className="button">Play</button>
      </div>
      <div className="description">
        <p className="desc">{Trend ? Trend.overview : " "}</p>
      </div>
    </div>
  );
}

export default Banner;
