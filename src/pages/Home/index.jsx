import { Swiper, SwiperSlide } from 'swiper/react';

import { BsArrowRightCircle } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { GiMountaintop } from "react-icons/gi";
import { GiMountains } from "react-icons/gi";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import { Canvas } from '@react-three/fiber'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styled from 'styled-components';
import igneaImg from '../../../src/images/bg-1.png'
import metaforficaImg from '../../../src/images/bg-3.png'
import sedimentarImg from '../../../src/images/bg-2.png'
import { useState } from 'react';

import { Link } from 'react-router-dom';

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 200%;
    z-index: 30;
`

export function Home() {

    const [handleMenu, setHandleMenu] = useState(false)

    return (
        <>
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

            <Swiper slidesPerView={1} direction={'vertical'} spaceBetween={0} mousewheel={true} className={`h-[100vh] ${!handleMenu ? 'blur-none' : 'blur-[1px]'}`}>

                <SwiperSlide className='h-[100vh]'>
                    <section id="ignea" className="relative h-[100vh] flex flex-col gap-4 pt-24 px-[2%]">
                        <h1 className='text-3xl'>Rochas</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget volutpat arcu. Nulla id neque ac sapien tempor eleifend quis in libero. Vestibulum et pellentesque justo. Ut volutpat fringilla lorem, sit amet tincidunt ipsum porta quis. Mauris nec consectetur lectus. Nullam ante elit, eleifend quis dignissim in, aliquam eu eros.</p>
                        <Canvas className='h-72'>
                            <ambientLight intensity={0.5}/>
                            <directionalLight position={[-2, 5, 2]} intensity={1}/>
                            <mesh rotation={[90, 0, 20]}>
                                <boxBufferGeometry attach="geometry" args={[3, 3, 3]}/>
                                <meshLambertMaterial attach="material" color="blue"/>
                            </mesh>
                        </Canvas>
                    </section>
                    <div className='flex w-full absolute bottom-16 justify-center'>
                        <IoChevronDown className='text-black text-3xl animate-bounce'/>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className='h-[100vh]'>
                    <section id="ignea" className=" bg-yellow-100 z-10 relative h-[100vh]">
                        <Div img={igneaImg} className="h-[100vh] relative flex items-center flex-col"> 
                            <GiMountaintop className="absolute top-[85px] left-1 text-[2.8rem] py-2 bg-yellow-100"/>
                            <BsArrowRightCircle className='absolute top-[91px] right-3 text-3xl'/>
                            <h1 className='text-center text-3xl pt-[85px] pb-6 drop-shadow-lg text-zinc-700'>Ignea</h1>
                            <p className='p-4 pl-16 leading-5 text-justify drop-shadow-styled'>This button component has a primary state that changes its color. When setting the primary prop to true, we are swapping out its background and text color.</p>
                            <IoChevronDown className='absolute bottom-16 text-white text-3xl animate-bounce'/>
                        </Div>
                        <div className='w-[2px] h-[100vh] bg-zinc-600 absolute left-6 top-[65px] rounded-full'></div>
                    </section>
                </SwiperSlide>

                <SwiperSlide className='h-[100vh]'>
                    <section id="metaforfica" className="bg-green-100 z-10 relative h-[100vh]">
                        <Div img={metaforficaImg} className="relative flex items-center flex-col"> 
                            <GiMountains className="absolute top-[85px] left-1 text-[2.8rem] py-2 bg-green-100"/>
                            <BsArrowRightCircle className='absolute top-[91px] right-3 text-3xl'/>
                            <h1 className='text-center text-3xl pt-[85px] pb-6 drop-shadow-lg text-zinc-700'>Metaforfica</h1>
                            <p className='p-4 pl-16 leading-5 text-justify drop-shadow-styled'>This button component has a primary state that changes its color. When setting the primary prop to true, we are swapping out its background and text color.</p>
                            <IoChevronDown className='absolute bottom-16 text-white text-3xl animate-bounce'/>
                        </Div>
                        <div className='w-[2px] h-[100vh] bg-zinc-600 absolute left-6 top-[0] z-20'></div>
                    </section>
                </SwiperSlide>

                <SwiperSlide className='h-[100vh]'>
                    <section id="sedimentar" className=" bg-red-100 z-10 relative">
                        <Div img={sedimentarImg} className="relative flex items-center flex-col"> 
                            <GiMountaintop className="absolute top-[85px] left-1 text-[2.8rem] py-2 bg-red-100"/>
                            <BsArrowRightCircle className='absolute top-[91px] right-3 text-3xl'/>
                            <h1 className='text-center text-3xl pt-[85px] pb-6 drop-shadow-lg text-zinc-700'>Sedimentar</h1>
                            <p className='p-4 pl-16 leading-5 text-justify drop-shadow-styled'>This button component has a primary state that changes its color. When setting the primary prop to true, we are swapping out its background and text color.</p>
                        </Div>
                        <div className='w-[2px] h-[100vh] bg-zinc-600 absolute left-6 top-[0] z-20'></div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
