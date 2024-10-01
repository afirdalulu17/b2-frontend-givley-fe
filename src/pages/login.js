import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({
           ...form,
           [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log(form);
    };

    return(
        <div>
        <div> 
            <Navbar /> 
        </div>
        <div>
        <h1 className="flex items-center justify-center mt-[50px] font-bold text-[#344E41] text-[30px]"
            >Login
        </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-[20px]">
        <input 
            name="email"
            type="text" 
            placeholder="Email"
            onChange={handleChange}
            className="w-[280px] h-[40px] bg-[#ECF0F1] placeholder-[#344E41] mt-[25px] p-2 rounded-lg" />
        <input 
            name="password"
            type="password" 
            placeholder="Password"
            onClick={handleChange}
            className="w-[280px] h-[40px] bg-[#ECF0F1] placeholder-[#344E41] mt-[25px] p-2 rounded-lg" />
        <button 
            onClick={handleSubmit}
            className="w-[280px] h-[40px] bg-[#588157] mt-[30px] text-white font-bold rounded-lg hover:bg-[#2C3E50]"
            >Login
        </button>
        <p className="text-[#344E41] font-bold text-[10px] mt-[10px] ml-[-40px]"
            >Dont have account?
        </p>
        <a href="register" className="text-[#588157] font-bold text-[10px] mt-[-15px] ml-[100px]"
            >Register
        </a>
        </div>
        <div> 
            <Footer /> 
        </div>
        </div>
    )
}