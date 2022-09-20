import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react'

import api from '../../services/api'
import styled from 'styled-components';

import './Slider.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper';
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const ContainerImg = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${props => props.url});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export function Post() {

    const [handleMenu, setHandleMenu] = useState(false)
    const location = useLocation() 
    const locationId = location.pathname.split('/')[2]
    const [posts, setPosts] = useState([]) 
    const [fullImage, setFullImage] = useState('')
 
    useEffect(()=> {
        async function getPots(){
            const res = await api.get('/posts')
            setPosts(res.data.posts)
        }
        getPots()
    }, [])

    return (

        <div className='bg-zinc-50 overflow-hidden'>
            

            <header  className={`hidden md:flex px-6 h-[56px] w-full justify-between items-center bg-white drop-shadow-md z-20 fixed ${!handleMenu ? 'blur-none' : 'blur-[1px]'}`}>
                <span className='text-xl'>Home</span>
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

            <div className="flex flex-col gap-5 pt-3 items-left  bg-gradient-to-r from-white to-blue-50">
                {
                    posts.map((post) => {
                        if(post._id === locationId){
                            const description = post.description.split('\n')
                            const photos = post.imgURL
                            console.log(photos)
                            return (
                                <div key={post._id} className='flex flex-col gap-12 mb-16'>
                                    <Link to={
                                        (post.type === 'sedimento') && '/sedimentos' ||
                                        (post.type === 'ignea') && '/Ignea' ||
                                        (post.type === 'metaforfica') && '/metaforfica'
                                    }
                                    className="flex items-center gap-4 pt-16"
                                    >
                                        <IoIosArrowRoundBack className='text-5xl cursor-pointer text-zinc-500'/>
                                        <span className='text-zinc-500 text-sm'>15 de agosto</span>
                                    </Link>

                                    <Swiper modules={[Navigation, Pagination]} navigation={true}  pagination={true} className='w-full'>
                                        {
                                            photos.map((photo) => {
                                                const randomNumber = Math.floor((Math.random() * 1000) + 1);
                                                return (
                                                    <SwiperSlide key={randomNumber} onClick={() => setFullImage(photo)}>
                                                        <ContainerImg url={photo} ></ContainerImg>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>

                                    

                                    <div className='flex justify-between max-w-[664px] align-bottom px-[2%]'>
                                        <h2 className='text-4xl font-light'>{post.title}</h2>
                                    </div>

                                    <div className='px-[2%]'>
                                        {description.map((parag) => {
                                            const randomNumber = Math.floor((Math.random() * 1000) + 1);
                                            return ( <p key={randomNumber} className='pb-2 max-w-[664px] first-letter:ml-[20px]'>{parag}</p> )
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <footer className='h-16 bg-zinc-50 text-zinc-600 flex justify-center items-center bg-transparent'>
                Copyright 2022 | Schwanke
            </footer>
        </div>
    )
} 