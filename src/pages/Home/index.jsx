import { Swiper, SwiperSlide } from 'swiper/react';

import { BsArrowRightCircle } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { GiMountaintop } from "react-icons/gi";
import { GiMountains } from "react-icons/gi";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper';

import styled from 'styled-components';
import igneaImg from '../../../src/images/a.png'
import metaforficaImg from '../../../src/images/b.png'
import sedimentarImg from '../../../src/images/c.png'

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
    return (
        <>
            <header className={`hidden md:flex px-6 h-[56px] w-full justify-between items-center bg-yellow-50 drop-shadow-md z-20 fixed`}>
                <span>Ignea</span>
                <span>v</span>
            </header> 

            <Swiper modules={[Navigation, Pagination]} navigation={false}  pagination={false} slidesPerView={1} direction={'vertical'} spaceBetween={0} className="h-[100vh]">
                <SwiperSlide className='h-[100vh]'>
                    <section id="ignea" className=" bg-yellow-100 z-10 relative">
                        <Div img={igneaImg} className="relative flex items-center flex-col"> 
                            <GiMountaintop className="absolute top-[90px] left-3 text-3xl"/>
                            <BsArrowRightCircle className='absolute top-[90px] right-3 text-3xl'/>
                            <h1 className='text-center text-3xl pt-20 pb-6 drop-shadow-lg text-zinc-700'>Ignea</h1>
                            <p className='p-4 pl-16 leading-5 text-justify'>This button component has a primary state that changes its color. When setting the primary prop to true, we are swapping out its background and text color.</p>
                            <IoChevronDown className='absolute bottom-5 text-white text-3xl animate-bounce'/>
                        </Div>
                        <div className='w-[2px] h-[80vh] bg-zinc-600 absolute left-6 top-[140px]'></div>
                    </section>
                </SwiperSlide>

                <SwiperSlide className='h-[100vh]'>
                    <section id="metaforfica" className="bg-green-100 z-10  relative">
                        <Div img={metaforficaImg} className="relative flex items-center flex-col"> 
                            <GiMountains className="absolute top-[90px] left-3 text-3xl"/>
                            <BsArrowRightCircle className='absolute top-[90px] right-3 text-3xl'/>
                            <h1 className='text-center text-3xl pt-20 drop-shadow-lg text-zinc-700'>Metaforfica</h1>
                            <p className='p-4 pl-16 leading-5 text-justify'>This button component has a primary state that changes its color. When setting the primary prop to true, we are swapping out its background and text color.</p>
                            <IoChevronDown className='absolute bottom-5 text-white text-3xl animate-bounce'/>
                        </Div>
                        <div className='w-[2px] h-[80vh] bg-zinc-600 absolute left-6 top-[140px] z-20'></div>
                    </section>
                </SwiperSlide>

                <SwiperSlide className='h-[100vh]'>
                    <section id="sedimentar" className=" bg-red-100 z-10 relative">
                        <Div img={sedimentarImg} className="relative flex items-center flex-col"> 
                            <GiMountaintop className="absolute top-[90px] left-3 text-3xl"/>
                            <BsArrowRightCircle className='absolute top-[90px] right-3 text-3xl'/>
                            <h1 className='text-center text-3xl pt-20 drop-shadow-lg text-zinc-700'>Sedimentar</h1>
                            <p className='p-4 pl-16 leading-5 text-justify'>This button component has a primary state that changes its color. When setting the primary prop to true, we are swapping out its background and text color.</p>
                            <IoChevronDown className='absolute bottom-5 text-white text-3xl animate-bounce'/>
                        </Div>
                        <div className='w-[2px] h-[80vh] bg-zinc-600 absolute left-6 top-[140px] z-20'></div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
