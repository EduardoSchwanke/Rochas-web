import { IoIosArrowDown } from "react-icons/io";

export function HeaderMobile() {
    return(
        <div className="hidden fixed z-50 top-0 w-full h-16 justify-center px-[2%] flex items-center bg-[#fafafa] shadow-md md:flex">
            <div className="flex items-center gap-2">
                <span>Ignea</span>
                <IoIosArrowDown className="mt-1"/>
            </div>
        </div>
    )
}