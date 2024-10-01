import { Navbar } from "@/components/Navbar"
import { Donasi } from "@/components/donasi"
import { Footer } from "@/components/Footer"

export default function Home() {
    return(
        <div>
            <Navbar />
            <Donasi />
        <div className="w-[230px] h-[160px] bg-[#ECF0F1] mt-[-885px] ml-[550px] p-[10px]">
        <img 
            className="w-[180px] h-[110px] mt-[10px] ml-[16px]" 
            src="/images/undraw.jpg" 
        />
        <p 
            className="w-[390px] h-[20px] font-normal text-[#344E41] text-[8px] ml-[5px]"
            >Silahkan Login terlebih dahulu untuk melakukan Donasi
        </p>
        </div>
        <div className="mt-[500px]">
            <Footer />
        </div>
        </div>
    )
}