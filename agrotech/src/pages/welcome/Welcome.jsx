import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Welcome() {

  const showSuccessNotification = () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.ready.then((registration) => {
            const title = "Your transaction is successful";
        

            registration.showNotification(title);
        });
    }
};

const handleSubscribe = () => {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Newsletter Subscription", {
          body: "You have subscribed to our newsletter!",
        });
      }
    });
  }
};
const showSuccessMessage = () => {
    showSuccessNotification();
   
}

  const sectionStyle = {
    backgroundImage: `url('https://www.science.org/do/10.1126/science.adf6990/abs/_20221107_on_china_rice.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };



  return (
    <div className="welcomepage">
      <nav className="welcomenav border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://github.com/yasiru2077/images1/blob/main/%E2%80%94Pngtree%E2%80%94agriculture%20logo%20template%20design_5226227.png?raw=true"
              className="logoimg h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="companyname self-center text-2xl font-semibold whitespace-nowrap text-white">AgroTeach</span>
          </a>
          <div className="flex items-center">
            <Link to="login" className="font-bold text-2xl text-black hover:underline">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <img
        className="h-auto max-w-full"
        src="https://www.terviva.com/wp-content/uploads/2023/09/Hero@2x-1-scaled.jpg"
        alt="image description"
      />
      <div className="p-10 flex flex-col gap-5">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Planting Millions of Trees to Feed Billions of People
        </h1>
        <p className="para1 text-center">Terviva is an agricultural innovation company partnering with farmers to grow and harvest pongamia, a climate-resilient tree which helps to reforest land and revitalize communities.</p>
        <p className="para2 text-center">After more than a decade of innovation, we've created an equitable and transparent supply chain where we transform pongamia beans into feedstock for biofuel and sustainable food ingredients called Ponova®.</p>
        <Link className="blogLink text-center">
          <i className="fa-regular fa-circle-play"></i> LEARN MORE
        </Link>
      </div>
      <div className="py-16 relative transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" style={sectionStyle}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">About Us</h2>
            <p className="text-gray-100 leading-relaxed mt-4">
              Suwandel Rice is ideally suited to address today's pressing environmental challenges. It thrives in diverse climates, enriches soil health, and conserves water resources, all while flourishing on land where traditional crops face limitations. This contributes to the preservation of natural ecosystems, prevents deforestation, and promotes the rejuvenation of agricultural lands and communities across the globe.
            </p>
            <p className="text-gray-100 leading-relaxed mt-4">
              With over a decade of relentless innovation, AgroTech has developed a groundbreaking process to harvest and transform Suwandel Rice into premium food products, which we proudly call "Suwanova®." Our commitment to a transparent and equitable supply chain spans from the cultivation of non-GMO Suwandel Rice in Sri Lanka to the promotion of regenerative land management practices in various regions, including Hawaii, Florida, and Australia.
            </p>
            <p className="text-gray-100 leading-relaxed mt-4">
              At AgroTech, we firmly believe in offering a superior approach to nourishing the world's growing population. We are passionate about creating local impact that can catalyze positive change on a global scale.
            </p>
          </div>
        </div>
      </div>
      <div className="hiring flex flex-col p-6 gap-5 items-center text-center">
        <h3 className="text-4xl text-center">We're Hiring!</h3>
        <p>
          At AgroTech, we're at the forefront of transforming the plant protein and oil markets with Suwandel Rice. We are on a mission to revolutionize agriculture by cultivating Suwandel Rice to feed billions of people sustainably. We are looking for individuals who are not just employees but passionate advocates of our vision and values.
        </p>
      
        <button
        onClick={handleSubscribe}
        className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Subscribe to Newsletter
      </button>
      </div>
    </div>
  );
}

export default Welcome;
