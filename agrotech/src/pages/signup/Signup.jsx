import React, { useState } from 'react'
import Add from "../../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from "../../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


function Signup() {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
    
        try {
          //Create user
          const res = await createUserWithEmailAndPassword(auth, email, password);
    
          //Create a unique image name
          const date = new Date().getTime();
          const storageRef = ref(storage, `${displayName + date}`);
    
          await uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                //Update profile
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
                //create user on firestore
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });
    
                //create empty user chats on firestore
                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/home");
             
            } catch (err) {
                console.log(err);
                setErr(true);
                setLoading(false);
              }
            });
          });
        } catch (err) {
          setErr(true);
          setLoading(false);
        }
      };

    return (
        <div className=' dark:bg-gray-900'>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="loginscreen flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                     
                        AgroTech
                    </a>
                    <div class="sectionlogin w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
                        <div class="loginFormpage p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign up in to your account
                            </h1>
                            <form onSubmit={handleSubmit} className='signupForm space-y-4 md:space-y-5'>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                    <input
                                        type="text"
                                        name="name" // Add a name attribute
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input
                                        type="email"
                                        name="email" // Add a name attribute
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input
                                        type="password"
                                        name="password" // Add a name attribute
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>


                                <div className='profile'>
                                    <input style={{ display: "none" }} type="file" id="file" name="file" /> {/* Add a name attribute */}
                                    <label htmlFor="file" className='propic'>
                                        <img className='bg-green-700 hover:bg-green-600 rounded-md' src={Add} alt="" />
                                        <span className='text-black'>Add an avatar</span>
                                    </label>
                                </div>

                                <br />
                                <button type="submit" class="w-full text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800">Sign in</button>
                                {loading && "Uploading and compressing the image please wait..."}
                                {err && <span>Something went wrong</span>}
                               
                                <p class="text-sm font-light text-gray-700 ">
                                    Dont have an account yet? <Link to="/login"><a href="#" class="font-medium text-gray-800 hover:underline dark:text-primary-500">Sign up</a></Link>
                                </p>
                                
                          
                               
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup