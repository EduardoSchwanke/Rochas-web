import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";

export function Sidebar(){

    return (
        <div className="flex flex-col items-center justify-evenly w-20 h-[100vh] bg-zinc-100 fixed border-r-[1px]">
            <div onClick={() => {setNav('create')}}>
                <AiOutlineAppstoreAdd className="w-8 h-8 cursor-pointer text-blue-500"/>
            </div>
            
            <div onClick={() => {setNav('edit')}}>
                <IoCreateOutline className="w-8 h-8 cursor-pointer text-blue-500"/>
            </div>

            <div onClick={() => {setNav('list')}}>
                <HiOutlineClipboardList className="w-8 h-8 cursor-pointer text-blue-500"/>
            </div>
            
            <div onClick={() => {setNav('delete')}}>
                <BsTrash className="w-8 h-8 cursor-pointer text-blue-500"/>
            </div>
        </div>
    )
}