import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "./area/all_area";

const server = "https://elice-covid.herokuapp.com/covidData";

function CovidMap() {
  // useState에서 data의 초기값을 aync로 가져온다.
  const [data, setData] = useState(null);
  const [regionalData, setRegionalData] = useState(null);

  useEffect(() => {
    const getCovid = async () => {
      const { data } = await axios
        .get(server)
        .then((response) => response.data);
      setData(data);
    };

    getCovid();

    console.log(data);
  }, []);

  return (
    <svg width="700px" height="1000px" viewBox="0 0 800 1200">
      <Seoul />
      <Gyeonggi />
      <Gangwon />
      <Incheon />
      <Chungnam />
      <Chungbuk />
      <Sejong />
      <Daejeon />
      <Gyeongnam />
      <Gyeongbuk />
      <Jeonbuk />
      <Jeonnam />
      <Ulsan />
      <Busan />
      <Daegu />
      <Gwangju />
      <Jeju />
    </svg>
  );
}
export default CovidMap;
