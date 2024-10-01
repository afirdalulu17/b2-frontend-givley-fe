import logo from "@/components/../../public/images/Logo.jpg"
import youtube from "@/components/../../public/images/youtube.png"
import facebook from "@/components/../../public/images/facebook.png"
import tiktok from "@/components/../../public/images/tiktok.png"
import linkedin from "@/components/../../public/images/linkedin.png"
import ig from "@/components/../../public/images/ig.png"

export function Footer(){
    return(
        <div className="w-[1440px] h-[200px] bg-[#ECF0F1] mt-[100px] p-[10px]">
        <img className="w-[70px] h-[20px] mt-[40px] ml-[100px]"
            src="/images/Logo.jpg" />
        <p className="w-[400px] mt-[20px] ml-[100px] text-[#344E41] leading-tight text-[13px]" >
            Our Online Donation Platform makes it easy to give and see the impact of your contributions. 
            Browse donation programs, donate securely, and track progress—all in one place.
            With user registration, you can manage your donations effortlessly. 
            Join us in making a difference with every contribution.
        </p>
        <p className="w-[132px] h-[29px] mt-[-125px] ml-[980px] font-bold text-[15px] text-[#344E41]">Social Media</p>
            <img src="/images/youtube.png"
            className="w-[35px] h-[35px] mt-[20px] ml-[860px]" />
            <img src="/images/facebook.png"
            className="w-[35px] h-[35px] mt-[-35px] ml-[905px]" />
            <img src="/images/tiktok.png"
            className="w-[35px] h-[35px] mt-[-35px] ml-[950px]" />
            <img src="/images/linkedin.png"
            className="w-[35px] h-[35px] mt-[-35px] ml-[995px]" />
            <img src="/images/ig.png"
            className="w-[35px] h-[35px] mt-[-35px] ml-[1040px]" />
        <p className="mt-[10px] ml-[815px] text-[13px] text-[#344E41]"
            >Copyright © 2024 GiveLy. All Rights Reserved
        </p>
        </div>
    )
}