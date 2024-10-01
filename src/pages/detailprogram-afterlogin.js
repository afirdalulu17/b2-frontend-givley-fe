import { Donasi } from "@/components/donasi"
import Vector from "@/../public/images/vector.png"
import { Footer } from "@/components/Footer"
import { useState } from "react";

export default function() {
    const [form, setForm] = useState({
        nominal: '',
        file: '',
        pesan: '',
    });

    const handleChange = (event) => {
        const nominal = event.target.nominal;
        const value = event.target.value;
        setForm({
           ...form,
           [nominal]: value,
        });
    };

    const handleSubmit = () => {
        console.log(form);
    }

    return(
        <div>
        <div className="w-[1440px] h-[120px] bg-[#ECF0F1] p-[10px]">
        <img 
            className="w-[90px] h-[30px] mt-[30px] ml-[100px]"
             src="/images/logo.jpg" 
        />
        <img 
            className="w-[110px] h-[30px] mt-[-30px] ml-[1000px]" 
            src="/images/login.png" 
        />
        </div>
        <div 
            className="mt-[30px]"> 
            <Donasi /> 
        </div>
        <div className="relative w-[230px] h-[320px] bg-[#ECF0F1] mt-[-890px] ml-[600px] p-[10px]">
        <label 
            for="nominal donasi" 
            className="text-[#344E41] text-[10px] font-normal"
            >Nominal Donasi
        </label>
        <div className="relative mt-[-3px]">
        <span 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#344E41] text-[15px] font-bold"
            >Rp
        </span>
        <input 
            name="nominal"
            onChange={handleChange}
            className="w-full pl-[25px] p-[5px] text-[15px] border rounded bg-white text-right font-bold"
            type="text" 
            id="nominal" 
            placeholder="0" />
        </div>
        <div className="flex flex-col mt-[10px]">
        <label 
            className="text-[#344E41] text-[10px] font-normal"
            >Bukti Transaksi
        </label>
        <label 
            className="w-[210px] h-[30px] flex items-center justify-between cursor-pointer bg-white p-3" 
            for="upload-gambar">
        <span className="flex items-center">
        <img 
            className="h-[15px] w-[15px]"
            src="/images/Vector.png" 
        />
        </span>
            <span className="w-full pl-[25px] p-[5px] text-[10px] text-right font-normal">
            Upload Gambar
        </span>
        </label>
        <input 
            name="file"
            onChange={handleChange}
            type="file" 
            id="upload-gambar" 
            hidden />
            <label For="pesan" className="text-[#344E41] text-[10px] font-normal mt-[10px]">Pesan</label>
        <textarea
            name="pesan"
            onChange={handleChange}
            id="pesan"
            className="w-full p-[5px] text-[10px] border rounded bg-white h-[90px]"
            placeholder="Sampaikan pesan motivasi kamu" />
        <button 
            onClick={handleSubmit}
            className="w-[210px] h-[35px] bg-[#588157] text-white text-[15px] font-bold hover:bg-[#2C3E50] mt-[35px]"
            type="submit"
            >Donasikan</button>
        </div>
        </div>
        <div 
            className="mt-[400px]"> 
            <Footer /> 
            </div>
        </div>
    )
}