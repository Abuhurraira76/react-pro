
import { serviceCardType } from "../types/service-card.type"
export default function Servicebox({title}:serviceCardType){
    return<>
    
    <div className="w-[257px] h-[270px] bg-[#262626] bg-opacity-50 shadow-lg rounded-md flex flex-col gap-3 items-center p-4">

      <h3 className="text-lg font-semibold text-white text-4xl mb-2">{title}</h3>
    
      <button className="mt-auto bg-[#3E3E3E96] text-white py-2 px-4 ">
        Learn More
      </button>
    </div>
    </>
}