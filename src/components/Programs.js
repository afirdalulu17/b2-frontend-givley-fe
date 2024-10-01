import programs from "@/components/../../public/images/programs.jpg"
import progressbar from "@/components/../../public/images/Progressbar.png"

export function Programs () {
    return(
        <div className="w-[200px] h-[230px] mt-[50px] ml-[100px] bg-[#ECF0F1] rounded-[20px] p-[10px]">
            <img src="/images/Programs.jpg" 
            className="w-[180px] h-[120px]"/>
            <p className="w-[300px] h-[56px] mt-[5px] font-bold text-[10px] text-[#344E41]">
            Bantu 220 Siswa Pertahankan Sekolah<br /> Terancam Roboh</p>
            <img src="/images/Progressbar.png"
            className="mt-[-20px]" />
            <p className="mt-[5px] font-normal text-[8px] text-[#344E41]">Terkumpul</p>
            <p className="w-[65px] h-[14px] mt-[-10px] ml-[150px] font-normal text-[8px] text-[#344E41]">Sisa Hari</p>
            <p className="w-[65px] h-[14px] mt-[-5px] font-bold text-[10px] text-[#344E41]">Rp10.861.000</p>
            <p className="w-[65px] h-[14px] mt-[-10px] ml-[168px] font-bold text-[10px] text-[#344E41]">98</p>
        </div>
    )
}