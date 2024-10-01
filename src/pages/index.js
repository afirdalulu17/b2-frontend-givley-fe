import { Hero } from "@/components/Hero"
import { Tittle } from "@/components/Title-programs"
import { Programs } from "@/components/Programs"
import { Footer } from "@/components/Footer"

export default function Home(){
    return(
        <div>
             <Hero />
             <Tittle />
        <div className="ml-[-100px] flex items-center justify-center">
             <Programs />
             <Programs />
             <Programs />
        </div>
        <div className="ml-[-100px] flex items-center justify-center">
             <Programs />
             <Programs />
             <Programs />
        </div>
        <div className="ml-[-100px] flex items-center justify-center">
             <Programs />
             <Programs />
             <Programs />
        </div>
             <Footer />
        </div>
    )
}