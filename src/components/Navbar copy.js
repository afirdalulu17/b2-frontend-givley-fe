import logo from "@/../public/images/logo.jpg"

export function Navbar() {
    return(
        <div>
        <div className="w-[1440px] h-[120px] bg-[#ECF0F1] p-[10px]"> 
            <img src="/images/Logo.jpg" 
            className="w-[70px] h-[20px] mt-[40px] ml-[100px]" />
            <a href="login" className="btn w-[80px] h-[25px] mt-[-20px] ml-[900px] rounded-[15px]
            bg-[#344E41] text-[#ECF0F1] flex items-center justify-center">Login</a>
        </div>
        </div>
    )
}