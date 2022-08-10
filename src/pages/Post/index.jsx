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

const ContainerImg = styled.div`
    width: 500px;
    height: 300px;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`

export function Post() {
    const location = useLocation() 
    const locationId = location.pathname.split('/')[2]
    const ur = 'http://localhost:3333/files/'
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

        <div className='bg-zinc-50'>
            <header className='flex w-full h-14 bg-blue-400 flex items-center px-[2%] text-white text-3xl'>
                <Link to='/' className='w-[20%]'>Rochas</Link>
                <ul className='text-base flex gap-16 w-[80%] justify-center'>
                    <Link to="/Ignea" className='h-7 flex items-center flex-col group justify-between curos'>
                        <p className='text-white text-base'>Ignea</p>
                        <div className='w-0 h-[1px] bg-white group-hover:w-[80%] transition-all'></div>
                    </Link> 

                    <Link to="/metaforfica" className='h-7 flex items-center flex-col group justify-between curos'>
                        <p className='text-white text-base'>Metaforfica</p>
                        <div className='w-0 h-[1px] bg-white group-hover:w-[80%] transition-all'></div>
                    </Link> 

                    <Link to="/sedimentos" className='h-7 flex items-center flex-col group justify-between curos'>
                        <p className='text-white text-base'>Sedimentar</p>
                        <div className='w-0 h-[1px] bg-white group-hover:w-[80%] transition-all'></div>
                    </Link> 
                </ul>    
            </header>
            {
                (fullImage != '') && (
                    <div className={`fixed w-[100%] h-[100%] z-40 top-0 bg-zinc-300 bg-opacity-30`} onClick={() => setFullImage('')}>
                        <div className='absolute top-[12%] right-[27%] z-50 text-blue-900 cursor-pointer p-1 text-xl px-2 py-1 bg-white rounded' onClick={() => setFullImage('')}>Close</div>
                        <img src={`http://localhost:3333/files/${fullImage}`} alt="" className='absolute left-[25%] top-[10%] w-[50%] max-h-[80%] rounded ring-blue-700 ring-4 ring-offset-4' />
                    </div>
                )
            }
            <div className="flex flex-col gap-5 pt-3 items-left px-[5%] bg-gradient-to-r from-white to-blue-50">
                {
                    posts.map((post) => {
                        if(post._id === locationId){
                            const description = post.description.split('\n')
                            const photos = post.photo
                            return (
                                <div key={post._id} className='flex flex-col gap-12 mb-16'>
                                    <Link to={
                                        (post.type === 'sedimento') && '/sedimentos' ||
                                        (post.type === 'ignea') && '/Ignea' ||
                                        (post.type === 'metaforfica') && '/metaforfica'
                                    }
                                    className="flex items-center gap-4"
                                    >
                                        <IoIosArrowRoundBack className='text-5xl cursor-pointer text-zinc-500'/>
                                        <span className='text-zinc-500 text-sm'>15, agosto de 2022</span>
                                    </Link>

                                    <Swiper modules={[Navigation, Pagination]} navigation={true}  pagination={true} className='w-[500px] rounded'>
                                        {
                                            photos.map((photo) => {
                                                const randomNumber = Math.floor((Math.random() * 1000) + 1);
                                                return (
                                                    <SwiperSlide key={randomNumber} onClick={() => setFullImage(photo)}>
                                                        <ContainerImg url={ur + photo} ></ContainerImg>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>

                                    

                                    <div className='flex justify-between max-w-[664px] align-bottom'>
                                        <h2 className='text-4xl font-light'>{post.title}</h2>
                                    </div>

                                    <div>
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
            <div className="fixed w-[50%] h-[50%] bg-[url('../../../src/images/montanha.png')] bottom-0 right-0 bg-contain bg-no-repeat bg-right-bottom"></div>
            <footer className='h-16 bg-zinc-50 text-zinc-600 flex justify-center items-center bg-transparent'>
                Copyright 2022 | Schwanke
            </footer>
        </div>
    )
} 