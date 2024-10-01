import Image from "@/components/../../public/images/image.jpg"
import logo from "@/components/../../public/images/logo.jpg"

export function Hero(){
    return(
        <div className="w-[1440px] h-[500px] bg-[#ECF0F1] flex">
            <img src="/images/image.jpg" 
            className="w-[380px] h-[450px] ml-[80px] mt-[30px]" />
            <img src="/images/Logo.jpg" 
            className="w-[80px] h-[25px] mt-[30px] ml-[45px]" />
            <a href="detailprogram" className="btn w-[80px] h-[25px] mt-[30px] ml-[300px] rounded-[15px]
            bg-[#344E41] text-[#ECF0F1] flex items-center justify-center">Login</a>
            <h1 className="mt-[130px] ml-[-455px] text-[#344E41] font-bold text-lg"
            >Join Us in Making a Difference</h1>
            <p className="w-[300px] mt-[170px] ml-[-265px] text-[#344E41] leading-tight text-sm">
            Your generosity has the power to change lives. By donating to our programs, 
            you help provide hope and support to those in need. Every contribution, big or small, 
            creates a ripple of positive impact. Together, we can uplift communities, inspire change, and build a 
            brighter future for all. Start yourjourney of giving today and see how your compassion can transform the world.
            </p>
            <h2 className="w-[170px] h-[30px] mt-[370px] ml-[-300px] text-[#344E41] rounded-[15px] 
            border-4 border-[#588157] font-bold text-xs text-center"
            >Explore our programs</h2>
        </div>
    )
}