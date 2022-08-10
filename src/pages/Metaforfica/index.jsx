import { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export function Metaforfica() {

    const [metaforfica, setMetaforfica] = useState([]) 

    const url = 'http://localhost:3333/files/'

    useEffect(()=> {
        async function getPots(){
            const res = await api.get('/posts')
            setMetaforfica(res.data.posts)
        }

        getPots()
    }, [])

    return(
        <>
            <header className='flex w-full h-14 bg-blue-400 flex items-center px-[2%] text-white text-3xl'>
                <Link to='/' className='w-[20%]'>Rochas</Link>
                <ul className='text-base flex gap-16 w-[80%] justify-center'>
                    <Link to="/Ignea" className='h-7 flex items-center flex-col group justify-between curos'>
                        <p className='text-white text-base'>Ignea</p>
                        <div className='w-0 h-[1px] bg-white group-hover:w-[80%] transition-all'></div>
                    </Link> 

                    <Link to="" className='h-7 flex items-center flex-col group justify-between curos'>
                        <p className='text-white text-base'>Metaforfica</p>
                        <div className='w-0 h-[1px] bg-white w-[80%] transition-all'></div>
                    </Link> 

                    <Link to="/sedimentos" className='h-7 flex items-center flex-col group justify-between curos'>
                        <p className='text-white text-base'>Sedimentar</p>
                        <div className='w-0 h-[1px] bg-white group-hover:w-[80%] transition-all'></div>
                    </Link> 
                </ul>    
            </header>
            <div className='mr-[2%] ml-[4%] mt-10 relative w-[40%]'>
                <input type="text" disabled className='rounded w-[100%] focus:ring-0 focus:outline-none focus:border-zinc-500' placeholder='pesquisar por rochas...'/>
                <AiOutlineSearch className='text-xl absolute top-0 right-0 bg-zinc-600 w-[60px] h-[42px] p-3 text-white rounded-r-sm cursor-pointer'/>
            </div>
            <div className='flex justify-evenly flex-wrap gap-7 pr-[2%] pl-[2%] pt-10'>
                {
                    metaforfica.map((post) => {
                        if(post.type === 'metaforfica'){
                            return (
                                <Link to={`/post/${post._id}`} key={post._id}>
                                    <div className="flex flex-col w-80 h-full gap-4 rounded-md cursor-pointer shadow-lg group">
                                        <div className='w-80'>
                                            <img src={url + post.photo[0]} alt="" className='rounded-t-lg'/>
                                        </div>
                                        <div className='flex flex-col gap-3 p-4 group-hover:underline'>
                                            <h3 className='text-2xl'>{post.title}</h3>
                                            <p className='line-clamp-3'>{post.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })
                }
            </div>
            <footer className='h-16 bg-zinc-50 text-zinc-600 flex justify-center items-center mt-32'>
                Copyright 2022 | Schwanke
            </footer>
        </> 
    )
}