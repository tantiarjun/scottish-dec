import Header from "../header/Header";
import Donatecard from "./Donatecard";
import Mantra from "./Mantra";
import Story from "./Story";
import Workwithus from "./Workwithus";
import Footer from "../footer/Footer";
import React from 'react';
import Events from "./Events";
import Shop from "./Shop";
import { useEffect, useState } from "react";
import axios from "axios";


const Homepage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/mantra');
        const mantraArry = response.data;
        mantraArry.map(item => {
          if (item.month === new Date().toLocaleString('default', { month: 'long' })) {
            setData(item)
          }
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  });


  return (
    <div>
      <Header />
      <Donatecard />
      <Story />
      <Events />
      <Workwithus />
      <Shop />
      {data.isChecked && <Mantra />}
      <Footer />
    </div>
  );
};

export default Homepage;
