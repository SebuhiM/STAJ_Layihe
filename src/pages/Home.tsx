import React, { useState, useEffect } from "react";
import MainBox_1 from "../components/MainBox_1";
import MainBox_2 from "../components/MainBox_2";
import MainBox_3 from "../components/MainBox_3";
import MainBox_4 from "../components/MainBox_4";
import MainBox_5 from "../components/MainBox_5";
import MainBox_6 from "../components/MainBox_6";
import MainBox_7 from "../components/MainBox_7";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "60px", fontSize: "18px", fontFamily: "sans-serif" }}>
       Loading... ⏳
      </div>
    );
  }

  return (
    <div>
      <MainBox_1 />
      <MainBox_2 />
      <MainBox_3 />
      <MainBox_4 />
      <MainBox_5 />
      <MainBox_6 />
      <MainBox_7 />
    </div>
  );
};

export default Home;