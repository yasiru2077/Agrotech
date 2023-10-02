import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    const sectionStyle = {
        backgroundImage: `url('https://www.science.org/do/10.1126/science.adf6990/abs/_20221107_on_china_rice.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className='welcomepage'>       
<nav class="welcomenav border-gray-200 ">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
        </a>
        <div class="flex items-center">
           <Link to="login" className=' font-bold text-2xl text-black hover:underline'>
            Login
           </Link> 
        </div>
    </div>
</nav>
    <img class="h-auto max-w-full" src="https://www.terviva.com/wp-content/uploads/2023/09/Hero@2x-1-scaled.jpg" alt="image description"/>
    <div className='p-10 flex flex-col gap-5'>

        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Planting Millions of Trees to Feed Billions of People</h1>
        <p className='para1 text-center'>Terviva is an agricultural innovation company partnering with farmers to grow and harvest pongamia, a climate-resilient tree which helps to reforest land and revitalize communities.</p>
        <p className='para2 text-center'>After more than a decade of innovation, we've created an equitable and transparent supply chain where we transform pongamia beans into feedstock for biofuel and sustainable food ingredients called Ponova®.</p>
        <Link className='blogLink text-center'><i class="fa-regular fa-circle-play"></i> LEARN MORE</Link>
    </div>
{/* <div className="blogpage flex flex-wrap justify-center gap-7">
        
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg" src="https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">The Sustainable Superfood: Exploring the Benefits of Suwandel Rice</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Discuss the nutritional benefits of Suwandel Rice, emphasizing its high fiber content, essential nutrients, and health advantages.
Highlight how the sustainable cultivation practices of Suwandel Rice contribute to a healthier planet.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg  w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-SOsgBvyU59ETZ5JkgWYav_yTgKCzuQ-nA&usqp=CAU" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">The Sustainable Superfood: Exploring the Benefits of Suwandel Rice</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Discuss the nutritional benefits of Suwandel Rice, emphasizing its high fiber content, essential nutrients, and health advantages.
Highlight how the sustainable cultivation practices of Suwandel Rice contribute to a healthier planet.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg" src="https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">The Sustainable Superfood: Exploring the Benefits of Suwandel Rice</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Discuss the nutritional benefits of Suwandel Rice, emphasizing its high fiber content, essential nutrients, and health advantages.
Highlight how the sustainable cultivation practices of Suwandel Rice contribute to a healthier planet.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
    </div> */}

<div className="py-16 relative transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"  style={sectionStyle}>
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4">About Us</h2>
          <p class="text-gray-100 leading-relaxed mt-4">
        Suwandel Rice is ideally suited to address today's pressing environmental challenges. It thrives in diverse climates, enriches soil health, and conserves water resources, all while flourishing on land where traditional crops face limitations. This contributes to the preservation of natural ecosystems, prevents deforestation, and promotes the rejuvenation of agricultural lands and communities across the globe.
      </p>
      <p class="text-gray-100 leading-relaxed mt-4">
        With over a decade of relentless innovation, AgroTech has developed a groundbreaking process to harvest and transform Suwandel Rice into premium food products, which we proudly call "Suwanova®." Our commitment to a transparent and equitable supply chain spans from the cultivation of non-GMO Suwandel Rice in Sri Lanka to the promotion of regenerative land management practices in various regions, including Hawaii, Florida, and Australia.
      </p>
      <p class="text-gray-100 leading-relaxed mt-4">
        At AgroTech, we firmly believe in offering a superior approach to nourishing the world's growing population. We are passionate about creating local impact that can catalyze positive change on a global scale.
      </p>
          
        </div>
      </div>
    </div>
    
<div className='hiring flex flex-col p-6 gap-5 items-center text-center'>
<h3 className=' text-4xl text-center'>We're Hiring!</h3>
<p>At AgroTech, we're at the forefront of transforming the plant protein and oil markets with Suwandel Rice. We are on a mission to revolutionize agriculture by cultivating Suwandel Rice to feed billions of people sustainably. We are looking for individuals who are not just employees but passionate advocates of our vision and values.</p>
<button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
  Sign in to countinue
</button>
</div>


</div>
    
  )
}

export default Welcome