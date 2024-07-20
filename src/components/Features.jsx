import React from 'react';
import Card from './Card';
import Card2 from './Card2';
import { IoIosPeople } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

function Features() {
  return (
    <div className="px-4">
      <div className="text-center text-2xl lg:text-4xl mt-5 font-extrabold text-[#8ec53e]">
        Win-Win, Transparent And Democratic Platform
      </div>
      
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center mt-10">
        <Card 
          icon={<IoIosPeople size={32} color='#8ec53e' />} 
          heading={"Value for Hard Work"} 
          para={"'Farmers' & 'People in Rural India' get the best value for their hard work and earn more than what they earn with traditional approach."} 
        />
        <Card 
          icon={<FaRupeeSign size={32} color='#8ec53e' />} 
          heading={"Value for Money"} 
          para={"Buyer gets value for their hard-earned money and cheaper products than traditional market."} 
        />
        <Card 
          icon={<FaRegCircle size={32} color='#8ec53e' />} 
          heading={"Transparency"} 
          para={"Product price, Supply and Demand data is transparent to all users and it helps them make better decisions."} 
        />
        <Card 
          icon={<FaThumbsUp size={32} color='#8ec53e' />} 
          heading={"Win-Win Platform"} 
          para={"Everyone wins in 'GeeCom India' platform, yes, that’s true. 'Farmers' & 'People in Rural India' earn more; Consumers save more."} 
        />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center mt-10">
        <Card2 
          icon={<FaMobileAlt size={32} color='#8ec53e' />} 
          para={"We believe that every Indian should reap the benefits of 'Digital India'."} 
        />
        <Card2 
          icon={<FaCartShopping size={32} color='#8ec53e' />} 
          para={"We are proud to support E-commerce for 'Farmers' and 'Rural India'."} 
        />
        <Card2 
          icon={<FaTelegramPlane size={32} color='#8ec53e' />} 
          para={"Our platform will empower millions of Indians and uplift their lives."} 
        />
        <Card2 
          icon={<FaChartBar size={32} color='#8ec53e' />} 
          para={"Data doesn't lie. 'Transparent' data will help our users to make better decisions."} 
        />
      </div>
    </div>
  );
}

export default Features;
