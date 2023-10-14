import React, { useContext, useState } from 'react';
import NavBar from '../../components/navbar/NavBar';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { AuthContext } from '../../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Sell() {
  const { currentUser } = useContext(AuthContext);
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(quantity) < 200) {
      setError('Minimum quantity must be 200kg');
      return;
    }

    if (parseFloat(price) > 150) {
      setError('Maximum price per kg must be Rs. 150');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, 'sales'), {
        sellerName: currentUser.displayName,
        riceType: 'Suwadell',
        quantity: parseInt(quantity),
        price: parseFloat(price),
        address,
        phoneNumber,
        timestamp: serverTimestamp(),
      });

      console.log('Document written with ID: ', docRef.id);

      setQuantity('');
      setPrice('');
      setAddress('');
      setPhoneNumber('');

      navigate(`/sellConfor?sellerName=${currentUser.displayName}&riceType=Suwadell&quantity=${quantity}&price=${price}&address=${address}&phoneNumber=${phoneNumber}`);

    } catch (error) {
      setError('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='sellgoods'>
      <NavBar />
      <Breadcrumbs />
      <br />
      
      <div className='sellMain relative top-10  min-h-screen flex flex-col items-center justify-center'>
       
        <form
          className=' p-6 md:p-8 pt-10 lg:p-10 rounded-lg  md:max-w-md w-full '
          onSubmit={handleSubmit}
        >
             <h2 className='text-2xl  font-semibold  mb-4 text-gray-800'>
          Sell Rice to the Company
        </h2>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Seller Name:
            </label>
            <input
              type='text'
              readOnly
              value={currentUser.displayName}
              className='w-full bg-gray-100 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Rice Type:
            </label>
            <input
              type='text'
              readOnly
              value='Suwadell'
              className='w-full bg-gray-100 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Quantity (kg):
            </label>
            <input
              type='number'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className='w-full bg-gray-100 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Price per kg:
            </label>
            <input
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='w-full bg-gray-100 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Address:
            </label>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='w-full bg-gray-100 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Phone Number:
            </label>
            <input
              type='tel'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className='w-full bg-gray-100 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          {error && <p className='text-red-500 mb-4'>{error}</p>}
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sell;
