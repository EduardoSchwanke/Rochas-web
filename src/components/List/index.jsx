import { useState, useEffect } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import api from "../../services/api"

export function List() {

    const [rochas, setRochas] = useState([]) 

    const url = 'http://localhost:3333/files/'

    useEffect(()=> {
        async function getPots(){
            const res = await api.get('/posts')
            setRochas(res.data.posts)
        }

        getPots()
    }, [])


    return (
        <div className="pl-24 pt-4 mb-10">
            <h1 className="text-3xl">Lista de rochas</h1>
            <div className="pl-7">
                <div className='mr-[2%] ml-[5%] mt-10 relative w-[40%]'>
                    <input type="text" className='rounded w-[100%] focus:ring-0 focus:outline-none focus:border-zinc-500' placeholder='pesquisar por rochas...'/>
                    <AiOutlineSearch className='text-xl absolute top-0 right-0 bg-zinc-600 w-[60px] h-[42px] p-3 text-white rounded-r-sm cursor-pointer'/>
                </div>
                <div className='flex flex-wrap  gap-10 justify-evenly pr-[2%] pl-[2%] pt-10'>
                    {
                        rochas.map((post) => {
                            return (
                                <div key={post._id} className="flex flex-col w-80 gap-4 rounded-md shadow-lg group">
                                    <div className='w-80'>
                                        <img src={url + post.photo[0]} alt="" className='rounded-t-lg w-80'/>
                                    </div>
                                    <div className='flex flex-col gap-3 p-4'>
                                        <h3 className='text-2xl'>{post.title}</h3>
                                        <p className='line-clamp-3 cursor-text'>{post._id}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}