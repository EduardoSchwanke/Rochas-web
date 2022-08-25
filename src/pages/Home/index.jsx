import { Swiper, SwiperSlide } from 'swiper/react'

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
`

export function Home() {
    return (
        <>
            <header className={`hidden md:flex px-6 h-[56px] w-full justify-between items-center bg-zinc-50 drop-shadow-md z-20 fixed`}>
                <span>Ignea</span>
                <span>v</span>
            </header> 

            <Swiper modules={[Navigation, Pagination]} navigation={false}  pagination={false} slidesPerView={1} direction={'vertical'} spaceBetween={0} className="h-[100vh]">
                <SwiperSlide className='h-[100vh]'>
                    <section id="ignea" className=" bg-yellow-100 z-10">
                        <Div img={igneaImg}> 
                            <h1 className='text-center text-3xl pt-20 drop-shadow-lg text-zinc-700'>Ignea</h1>
                        </Div>
                    </section>
                </SwiperSlide>

                <SwiperSlide className='h-[100vh]'>
                    <section id="metaforfica" className=" bg-green-100 z-10">
                    <Div img={metaforficaImg}> 
                            <h1 className='text-center text-3xl pt-20 drop-shadow-lg text-zinc-700'>Metaforfica</h1>
                        </Div>
                    </section>
                </SwiperSlide>

                <SwiperSlide className='h-[100vh]'>
                    <section id="sedimentar" className=" bg-red-100 z-10">
                    <Div img={sedimentarImg}> 
                            <h1 className='text-center text-3xl pt-20 drop-shadow-lg text-zinc-700'>Sedimentar</h1>
                        </Div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
