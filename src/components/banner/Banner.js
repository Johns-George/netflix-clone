import React, { useState, useEffect, useRef } from "react";
import { apikey, imgurl } from "../../constants/constants";
import axios from "../../components/axios";
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
        setTrend(output.current[randomId])
  }

  function BannerNavigate2() {
    if (randomId <= 0) {
      return
    }

    setRandomId(val => val - 1)


    setTrend(output.current[randomId])

  }
  useEffect(() => {

    getData().then((response) => {
      console.log('Initial render')
      output.current = response.data.results
      setTrend(output.current[0])
    })
  }, []);

  return (
    <div
      id="bann"
      className="bg-contain bg-no-repeat lg:bg-cover bg-black pt-60 pb-8 w-screen"
      style={{
        backgroundImage: `url(${Trend ? imgurl + Trend.backdrop_path : ""})`
      }}
    >
      <div className="flex justify-between">
      <button onClick={() => BannerNavigate2()} className=""> <i className='fas fa-angle-left text-gray-500 w-10 text-4xl'></i></button>
      <button onClick={() => BannerNavigate()} className="navigate1"> <i className='fas fa-angle-right text-gray-500 w-10 text-4xl'></i></button>
      </div>
      <div className="lg:mt-20">
        <h2 className="ml-8">{Trend ? Trend.title : ""}</h2>
        <button className="bg-red-700 border-none rounded-lg cursor-pointer ml-8 mt-6 w-20 h-10">Play</button>
      </div>
      <div className="description">
        <p className="text-white text-xl mt-14 lg:mt-8 lg:text-2xl ml-8 mr-8">{Trend ? Trend.overview : " "}</p>
      </div>
    </div>
  );
}

export default Banner;
