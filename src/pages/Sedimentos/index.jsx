import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';
import { RiMenu3Line } from 'react-icons/ri';

const Div = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export function Sedimentos() {

    const [handleMenu, setHandleMenu] = useState(false)
    const [sedimentos, setSedimentos] = useState([]) 
    const [load, setLoad] = useState(true) 

    useEffect(()=> {
        async function getPots(){
            const res = await api.get('/posts')
            setSedimentos(res.data.posts)
        }

        getPots()
    }, [])

    return(
        <>
            <header  className={`hidden md:flex px-6 h-[56px] w-full justify-between items-center bg-white drop-shadow-md z-20 ${!handleMenu ? 'blur-none' : 'blur-[1px]'}`}>
                <span className='text-xl'><Link to="/">Home</Link></span>
                <RiMenu3Line 
                    onClick={() => {
                        setHandleMenu(!handleMenu)
                    }}
                    className='text-2xl pt-1'
                />
            </header> 

            {
                handleMenu && (
                    <div className='h-[100vh] w-[100vw] bg-[rgba(0,0,0,.2)] absolute top-0 right-0 z-50 p-5'>
                        <div className='h-[100vh] w-[80vw] bg-white absolute top-0 right-0 z-50 p-5'>
                            <div>
                                <AiOutlineClose 
                                    onClick={() => {
                                        setHandleMenu(!handleMenu)
                                    }}
                                    className='text-2xl'
                                />
                            </div>
                            <ul className='flex flex-col gap-5 mt-7'>
                                <Link to='/ignea' className='border-b-2 border-zinc-040 pb-2'>Ignea</Link>
                                <Link to='/metaforfica' className='border-b-2 border-zinc-040 pb-2'>Metaforfica</Link>
                                <Link to='/sedimentos' className='border-b-2 border-zinc-040 pb-2'>Sedimentar</Link>
                            </ul>
                        </div>
                    </div>
                )
            }

            <div className={`flex w-full h-24 items-center justify-center ${!handleMenu ? 'blur-none' : 'blur-[1px]'}`}>
                <h1 className='text-3xl text-zinc-700'>Rochas sedimentares</h1>
            </div>
            

            <div className={`flex justify-evenly flex-wrap pr-[2%] pl-[2%] gap-2 ${!handleMenu ? 'blur-none' : 'blur-[1px]'}`}>
                {
                    sedimentos.map((post) => {
                        if(post.type === 'sedimento'){
                            return (
                                <Div img={post.imgURL[0]} className={`w-[96%] h-52 rounded smin:w-[46%] `} key={post._id}>
                                    <Link to={`/post/${post._id}`} key={post._id}>
                                        <div className='w-full h-full bg-[rgba(0,0,0,.3)] flex flex-col justify-end'>
                                            <h2 className='text-2xl drop-shadow-black px-2 text-white'>{post.title}</h2>
                                            <p className='text-white drop-shadow-black line-clamp-3 p-2 font-light group-hover:underline group-hover:underline-offset-2'>{post.description}</p>
                                        </div>
                                    </Link>
                                </Div>
                            )
                        }
                    })
                    
                }
            </div>

            <footer className='h-16 bg-zinc-50 text-zinc-600 flex justify-center items-center mt-6'>
                Copyright 2022 | Schwanke
            </footer>
        </> 
    )
}
/*
<Link to={`/post/${post._id}`} key={post._id}>
    <div className="flex flex-col justify-center w-full h-full gap-4 cursor-pointer group">
        <div className='w-96 h-64'>
            <img src={url + post.photo[0]} alt="" className='rounded-md shadow-md w-96 h-64'/>
        </div>
        <div className='flex flex-col gap-3 p-4 items-center'>
            <h3 className='text-2xl font-light'>{post.title}</h3>
            <p className='line-clamp-5 font-light group-hover:underline group-hover:underline-offset-2'>{post.description}</p>
        </div>
    </div>
</Link>
*/