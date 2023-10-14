import React, { useRef } from 'react';
import NavBar from '../../components/navbar/NavBar';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

function Grow() {
  const utteranceRef = useRef(null);

  const handleClick = () => {
    // Find the elements with class "article"
    const articleElements = document.querySelectorAll('.article');
    
    if (articleElements.length > 0) {
      // Combine the text content of all article elements
      const text = Array.from(articleElements)
        .map((element) => element.textContent)
        .join('\n');
        
      const newUtterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      utteranceRef.current = newUtterance;
      window.speechSynthesis.speak(newUtterance);
    }
  }

  const handleStopClick = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.cancel(); // Cancel the ongoing speech
    }
  }
  return (
    <>
      <NavBar />
     <Breadcrumbs/>
      
      <div className='bg-gradient-to-b p-8 min-h-screen relative top-20'>
       
        <div className='max-w-3xl mx-auto p-6 rounded-lg shadow-lg bg-white bg-opacity-90'>
       
          <div className='flex  items-center'>
          <img className='w-full'  src="https://media.istockphoto.com/id/1365112443/vector/rice-field-graphic-black-white-landscape-sketch-illustration-vector.jpg?s=612x612&w=0&k=20&c=TmgX6LwNfoD2ygIljE5IQ6VrEfwAmxR0DvVfwwQnliw=" alt="" />
          </div>
          
        <div className='flex flex-row pt-2'>
        <button onClick={handleClick} className='bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white'><i class="fa-solid fa-play"></i> READ</button>
        <button onClick={handleStopClick} className='bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white'><i class="fa-solid fa-stop"></i> STOP</button>
        </div>
        <div className='article'>

          <h1 className='text-4xl font-semibold mb-6'>
            A Comprehensive Guide on How to Grow Rice
          </h1>
        
          <p className='text-gray-800 text-lg'>
            <strong>Introduction:</strong> Rice, one of the world's most widely consumed staple foods, is a versatile grain that can be grown in a variety of climates. It serves as the primary source of sustenance for millions of people worldwide. Learning how to grow rice can be a rewarding experience, whether you have a small backyard garden or a larger agricultural field. This guide will walk you through the steps to successfully cultivate this essential crop.
          </p>

          <h2 className='text-2xl font-semibold mt-8'>
            Choosing the Right Rice Variety
          </h2>
          <p className='text-gray-800 text-lg'>
            The first step in growing rice is selecting the right variety. Rice varieties can be broadly categorized into three types: short-grain, medium-grain, and long-grain. The choice largely depends on your location and preferences. Short-grain rice is typically grown in cooler climates, while long-grain rice thrives in warmer regions.
          </p>

          <h2 className='text-2xl font-semibold mt-8'>
            Preparing the Rice Field
          </h2>
          <p className='text-gray-800 text-lg'>
            <strong>Select the Right Location:</strong> Rice requires a lot of water and sunlight. Choose a well-drained, level field with access to a consistent water source.
            <br />
            <strong>Tillage:</strong> Plow the field to break up the soil and prepare it for planting. Ensure the soil is loose and well-aerated.
            <br />
            <strong>Levelling:</strong> Level the field evenly to ensure uniform water distribution during the growing season. Proper levelling helps prevent waterlogging in some areas and drought in others.
          </p>
          
          <h2 className='text-2xl font-semibold mt-8'>
            Conclusion
          </h2>
          <p className='text-gray-800 text-lg'>
            Growing rice can be a fulfilling endeavor, but it requires careful planning, water management, and attention to detail. By selecting the right rice variety, preparing the field adequately, and following the steps outlined in this guide, you can cultivate a healthy rice crop that can contribute to your food security or even provide surplus for sale. Remember that rice cultivation may require adjustments based on your specific climate and local conditions, so continuous learning and adaptation are key to successful rice farming.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grow;
