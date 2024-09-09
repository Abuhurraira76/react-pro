import Servicebox from "./Servicebox"
import { serviceCardData } from "../data/service-card-data"
import { serviceCardType } from "../types/service-card.type"
export default function Services(){
    
    return<>
    <div className=" bg-b">
    <div className=" w-[1328px] h-[196px]  bg-[#262626] text-white text-center text-lg md:text-5xl mb-8 font-bold">
    Our Services
   
   <div className="text-white text-center text-sm md:text-base pt-3" >Transform your brand with our innovative digital solutions that captivate and engage your audience.</div>
   </div>
    
    <div className=" bg flex flex-wrap justify-between grid grid-cols-4 gap-3 p-4 max-w-[1328px] h-[540px]" >
    {serviceCardData.map((item:serviceCardType)=>{
        return <Servicebox title={item.title}/>
    })}
    
    </div>
    </div>
    
    </>
}