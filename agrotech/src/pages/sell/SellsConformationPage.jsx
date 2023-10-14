import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../../firebase';
import NavBar from '../../components/navbar/NavBar';

function SellsConfirmationPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sellerName = queryParams.get('sellerName');
  const riceType = queryParams.get('riceType');
  const quantity = queryParams.get('quantity');
  const price = queryParams.get('price');
  const address = queryParams.get('address');
  const phoneNumber = queryParams.get('phoneNumber');
  
  // State to store the total quantity sold by the seller
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Function to fetch and calculate the total quantity sold by the seller
  const fetchTotalQuantity = async () => {
    try {
      // Create a query to retrieve transactions by the seller
      const q = query(collection(db, 'sales'), where('sellerName', '==', sellerName));
      
      const querySnapshot = await getDocs(q);
      let total = 0;

      // Calculate the total quantity sold by the seller
      querySnapshot.forEach((doc) => {
        const transactionData = doc.data();
        total += transactionData.quantity;
      });

      // Set the total quantity in the state
      setTotalQuantity(total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch the total quantity when the component mounts
  useEffect(() => {
    fetchTotalQuantity();
  }, [sellerName]);

  return (
    <div>
    
      <div className=" relative top-10 bg-white p-4 md:p-6 rounded-lg shadow-lg mx-auto mr-5 ml-5 max-w-md">
        <div className="text-green-500 text-4xl md:text-5xl text-center mb-4 md:mb-6">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2 md:mb-4">Sales Confirmation</h2>
        <div className="mb-2 md:mb-4">
          <p className="font-semibold">Seller Name:</p>
          <p>{sellerName}</p>
        </div>
        <div className="mb-2 md:mb-4">
          <p className="font-semibold">Rice Type:</p>
          <p>{riceType}</p>
        </div>
        <div className="mb-2 md:mb-4">
          <p className="font-semibold">Quantity:</p>
          <p>{quantity} kg</p>
        </div>
        <div className="mb-2 md:mb-4">
          <p className="font-semibold">Price per kg:</p>
          <p>Rs. {price}</p>
        </div>
        <div className="mb-2 md:mb-4">
          <p className="font-semibold">Address:</p>
          <p>{address}</p>
        </div>
        <div className="mb-2 md:mb-4">
          <p className="font-semibold">Phone Number:</p>
          <p>{phoneNumber}</p>
        </div>
        
        {/* Display the total quantity sold by the seller */}
        <div className="mb-2 md:mb-4">
          <p className="font-semibold">Total Quantity Sold by {sellerName}:</p>
          <p>{totalQuantity} kg</p>
        </div>
        <Link to='/home'>
        <button className='text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:hover:bg-green-400 focus:outline-none '>Done</button>
        </Link>
      
      </div>
    </div>
  );
}

export default SellsConfirmationPage;
