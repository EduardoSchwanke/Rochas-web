import { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Line } from 'react-icons/ri'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import api from '../../services/api'


const Div = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export function Metaforfica() {

    const [handleMenu, setHandleMenu] = useState(false)
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
                <h1 className='text-3xl text-zinc-700'>Rochas metaforficas</h1>
            </div>

            <div className='flex justify-evenly flex-wrap gap-2 pr-[2%] pl-[2%]'>
                {
                    metaforfica.map((post) => {
                        if(post.type === 'metaforfica'){
                            return (
                                <Div img={url + post.photo[0]} className={`w-[96%] h-52 rounded smin:w-[46%]`} key={post._id}>
                                    <div className='w-full h-full bg-[rgba(0,0,0,.3)] flex flex-col justify-end'>
                                        <h2 className='text-2xl drop-shadow-black px-2 text-white'>{post.title}</h2>
                                        <p className='text-white drop-shadow-black line-clamp-3 p-2 font-light group-hover:underline group-hover:underline-offset-2'>{post.description}</p>
                                    </div>
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