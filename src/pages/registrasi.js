import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar copy"
import { useState } from "react";

export default function Home() {
    const [form, setForm] = useState({
        fullName: '',
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
    }
    
    return(
        <div>
        <div> <Navbar /> </div>
        <div>
            <h1 className="flex items-center justify-center mt-[50px] font-bold text-[#344E41] text-[30px]">Register</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-[30px]">
        <input 
            name="fullName"
            type="text" 
            placeholder="Full Name"
            onChange={handleChange}
            className="w-[280px] [h-70px] bg-[#ECF0F1] placeholder-[#344E41] p-2 rounded-lg" 
        />
        <input 
            name="email"
            type="text" 
            placeholder="Email"
            onChange={handleChange}
            className="w-[280px] h-[40px] bg-[#ECF0F1] placeholder-[#344E41] mt-[25px] p-2 rounded-lg" 
        />
        <input 
            name="password"
            type="password" 
            placeholder="Password"
            onChange={handleChange}
            className="w-[280px] h-[40px] bg-[#ECF0F1] placeholder-[#344E41] mt-[25px] p-2 rounded-lg" 
        />
        <button 
            className="w-[280px] h-[40px] bg-[#588157] mt-[30px] text-white font-bold rounded-lg hover:bg-[#2C3E50]"
            onClick={handleSubmit}>Register
        </button>
        <p 
            className="text-[#344E41] font-bold text-[10px] mt-[10px] ml-[-15px]"
            >Already have account?
        </p>
        <a href="login"
            className="text-[#588157] font-bold text-[10px] mt-[-15px] ml-[125px]"
           >Login
        </a>
        </div>
        <div> 
            <Footer /> 
        </div>
        </div>
    )
}