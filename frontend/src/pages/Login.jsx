import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";


const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate=useNavigate()
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword]=useState("")
  const [name, setName] = useState("");
  const [showPassword,setShowPassword]=useState(false)
  const passwordType = showPassword ? "text" : "password";
  console.log(name);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Sign Up") {
        if(password!==confirmPassword){
          toast.error("Password and Confirm password Should be Match");
          return
        }
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          password,
          email,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          password,
          email,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  };
  const changeShowPasswordStatus=()=>{
    setShowPassword(!showPassword);
  }
  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "Create Account" : "Login"} to book
          appointment
        </p>
        {state === "Sign Up" && (
          <div className='w-full'>
            <p>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <div className='relative w-full mt-1'>
            {/* Password input */}
            <input
              className='w-full border border-zinc-300 rounded p-2 pr-10'
              type={passwordType}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer'
              onClick={changeShowPasswordStatus}
              type='button'
            >
              {!showPassword && <IoMdEyeOff size='25' color='#64748b' />}
              {showPassword && <IoEye size='25' color='#64748b' />}
            </button> 
          </div>
        </div>
        <div className='w-full'>
          <p>Confirm password</p>
          <div className='relative w-full mt-1'>
            {/* Confirm Password input */}
            <input
              className='w-full border border-zinc-300 rounded p-2 pr-10'
              type={passwordType}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
            <button
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer'
              onClick={changeShowPasswordStatus}
              type='button'
            >
              {!showPassword && <IoMdEyeOff size='25' color='#64748b' />}
              {showPassword && <IoEye size='25' color='#64748b' />}
            </button> 
          </div>
        </div>
        <button
          type='submit'
          className='bg-primary text-white w-full py-2 rounded-md text-base'
        >
          {state === "Sign Up" ? "Create Account" : "Login"}{" "}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className='text-primary underline cursor-pointer'
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?
            <span
              onClick={() => setState("Sign Up")}
              className='text-primary underline cursor-pointer'
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;