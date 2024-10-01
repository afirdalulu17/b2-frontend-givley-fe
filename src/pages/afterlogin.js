import Logo from "@/../public/images/logo.jpg"
import Login from "@/../public/images/login.png"
import { useState } from "react"

export default function Home() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        console.log(dropdownOpen);
    };

    return(
        <div>
        <div>
            <h1 className="w-[660px] h-[154px] font-bold">AFTER LOGIN</h1>
        </div>
        <div className="w-[1440px] h-[120px] bg-[#ECF0F1] p-[10px] mt-[-50px]">
        <img 
            className="w-[90px] h-[30px] mt-[30px] ml-[100px]" 
            src="/images/logo.jpg" 
        />
        <img 
            onClick={toggleDropdown}
            className="w-[110px] h-[30px] mt-[-30px] ml-[1000px]" 
            src="/images/login.png" 
        />
        <div className="absolute right-20 mt-2 w-[200px] bg-white shadow-lg rounded-lg p-2">
        <ul className="py-2 text-left">
        <li>
        <a href="landing-afterlogin" className="block hover:bg-[#95A5A6] px-4 py-2 hover:bg-[#95A5A6] bg-[#ECF0F1] border border-[#ECF0F1] 
            cursor-pointer rounded-lg font-bold text-[10px] text-center text-[#344E41] mb-2">
            Program Donasi Kamu
        </a>
        </li>
        <li>
        <a href="logout" className="block px-4 py-2 hover:bg-[#95A5A6] bg-red-100 border border-[#ECF0F1] 
        cursor-pointer rounded-lg font-bold text-[10px] text-center text-[#344E41]">
            Logout
        </a>
        </li>
        </ul>
        </div>
        </div>
        </div>
    )
}