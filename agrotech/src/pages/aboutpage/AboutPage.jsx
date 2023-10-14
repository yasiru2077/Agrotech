import React from 'react';
import NavBar from '../../components/navbar/NavBar';

function AboutPage() {
  return (
    <><div className='AboutOri mb-16'><NavBar /></div><div className="bg-gray-100 min-h-screen p-6">
      <div className="AboutOri  shadow-xl max-w-3xl mx-auto bg-white p-8 rounded-lg">
        <h1 className="text-4xl font-semibold text-center mb-6">
          Suwadell Rice Agrotech: Innovating Sustainability
        </h1>

        <div className="text-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p>
            Welcome to Suwadell Rice Agrotech, your partner in sustainable,
            innovative, and high-quality rice production. At Suwadell, we are
            passionate about revolutionizing the agro-industry through
            cutting-edge technology, eco-friendly practices, and a deep-rooted
            commitment to serving our community.
          </p>
        </div>

        <div className="text-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p>
            Founded in [Year], Suwadell Rice Agrotech has been a pioneer in the
            rice farming and processing industry. Our journey began with a vision
            to create a sustainable agro-enterprise that would not only meet the
            rising demands for rice but also contribute to the well-being of local
            communities.
          </p>
        </div>

        <div className="text-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Sustainability:</strong> We are dedicated to responsible
              farming practices. Our fields are a testament to sustainable
              agriculture, where we employ water-efficient techniques, natural
              fertilizers, and eco-friendly pest control measures.
            </li>
            {/* Repeat this pattern for other commitment points */}
          </ul>
        </div>

        <div className="text-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Products</h2>
          <p>
            Suwadell Rice Agrotech offers a range of rice products, including [list
            specific product names and variations]. Our rice is renowned for its
            exceptional taste, nutritional value, and versatility in various
            culinary applications.
          </p>
        </div>

        <div className="text-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p>
            We appreciate your interest in Suwadell Rice Agrotech. If you have any
            questions, feedback, or would like to explore business partnerships,
            please don't hesitate to contact us. We are always here to assist
            you.
          </p>
        </div>

        <div className="text-lg">
          <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
          <p>
            Join us on our journey to redefine the agro-industry through
            sustainable practices, technological advancements, and a passion for
            quality. At Suwadell Rice Agrotech, we believe that the future of rice
            is not just in our fields but in every bowl it graces. Thank you for
            being a part of this exciting journey with us.
          </p>
        </div>
      </div>
    </div></>
  );
}

export default AboutPage;
