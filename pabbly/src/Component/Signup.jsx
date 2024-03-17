import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Oauth/Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';

const obj={
    username:"",
    email:"",
      password:""
  }

function Signup() {
    const Navigate=useNavigate();
    const [form,setForm]=useState()
    const provider= new GoogleAuthProvider()

    function HandleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
       }
    
      async function HandleSubmit(e){
    
        console.log(obj)
        e.preventDefault();
        try {
          let resp=await axios.post(`http://localhost:9911/user/login`,{...form});
          console.log(resp)
          // if(resp.data.operator==='admin'){
          //   navigator('/home')
          // }
          // const obj={
          //   isauth.token:resp.token,
          //   isautho.isauth:true,
          // }
    
          // setIsautho(obj)
        } catch (error) {
          console.log(error)
        }
          
            console.log("Form Submitted");
       }
    
       const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          // navigate("/home");
          console.log(result)
        });
      }


  return (
    <section className="h-[100%] flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
    <div className="md:w-1/3 max-w-sm">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        alt="Sample image" />
    </div>
    <div className="md:w-1/3 max-w-sm">
    <div className="text-center md:text-left flex justify-start gap-6 ">
          <label className="mr-1">Sign in with</label>
          <div>
          <FcGoogle
             onClick={signInWithGoogle}
         className="w-24 h-[35px] -ml-12 cursor-pointer"
      />
      
      </div>
       
        </div>
      <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
      </div>
      <form onSubmit={HandleSubmit}>
      <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" name='username'/>
     
      <input   onChange={(e)=>HandleChange(e)} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="email" placeholder="Email Address" name='email' />
      <input   onChange={(e)=>HandleChange(e)} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" name='password' />
      <input   onChange={(e)=>HandleChange(e)} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-[#8898ee] text-white"  type="submit"/>
      </form>
      <div className="mt-4 flex justify-between font-semibold text-sm">
        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
          <input className="mr-1" type="checkbox" />
          <span>Remember Me</span>
        </label>
        <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
      </div>
      {/* <div className="text-center md:text-left">
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
      </div> */}
      <div  onClick={() => {
            Navigate("/login");
          }} className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        If you have Alredy Registered? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Login</a>
      </div>
    </div>
  </section>
  )
}

export default Signup
