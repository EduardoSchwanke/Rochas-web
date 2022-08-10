import { Header } from '../../components/Header'

import { Link } from 'react-router-dom'

import { GiMountains } from "react-icons/gi";


import sedimentoUrl from '../../images/bg-1.png'
import igneaUrl from '../../images/bg-2.png'
import metaforfica from '../../images/bg-3.png'
import mountbg from '../../images/mount-removebg-preview.png'

import { useEffect } from 'react';
import { useState } from 'react';
import { HomeText } from '../../components/HomeText';
import { HomePng } from '../../components/HomePng';
import styled from 'styled-components';


const ContainerImg = styled.div`
    max-width: 900px;
    height: 400px;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`


export function Home() {

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        function scrollPosition(){
            setScroll(window.scrollY)
        }

        window.addEventListener('scroll', scrollPosition)
    }, [])

    return (
        <>

            <Header scroll={scroll}/>

            <div className='pr-[2%] mt-16 flex overflow-hidden pb-8'>

                <HomeText/>

                <HomePng/>

            </div> 

            <div className="w-full relative flex" id='Ignea'>
                <div className='w-[20%] h-full bg-zinc-600'>
                    <div className='w-[2px] h-[140%] absolute bg-zinc-500 left-[15%] -top-32 rounded-full'></div>
                    <div className='w-6 h-6 flex items-center justify-start absolute left-[13.7%] top-[50%] bg-white z-20'>
                        <div className='w-10 h-10 bg-white p-2 flex items-center'><GiMountains className='w-10 h-10'/></div>
                    </div>
                </div>
                
                <div className=' flex flex-col relative w-[80%] pr-10 p-4 pb-0 pt-24'>
                    <Link to='/Ignea' className='flex flex-col'>
                        <p className='p-4 pb-0 pt-24 max-w-[900px]'>
                            Lorem ipsum dolor sit amet, augue vel maximus iaculis, a pharetra enim leo sed mauris. Suspendisse sapien dolor, tristique a dolor at, hendrerit feugiat leo. In at eros ligula. Duis at feugiat est. Nulla elit turpis, porta malesuada est vel, blandit volutpat sem. Nunc luctus ligula lectus. Donec a massa porttitor, placerat elit sit amet, varius velit. Ut mollis condimentum finibus.
                        </p>
                        <ContainerImg url={igneaUrl}></ContainerImg>
                    </Link>
                </div>
            </div>

            <div className='w-full relative flex' id='metaforfica'>
                <div className='w-[20%] h-full bg-zinc-600'>
                    <div className='w-[2px] h-[170%] absolute bg-zinc-500 left-[15%] -top-72 rounded-full'></div>
                    <div className='w-6 h-6 flex items-center justify-start absolute left-[13.7%] top-[50%] bg-white z-20'>
                        <div className='w-10 h-10 bg-white p-2 flex items-center justify-center'><GiMountains className='w-10 h-10'/></div>
                    </div>
                </div>
                
                <div className=' flex flex-col relative w-[80%] pr-10 p-4 pb-0 pt-24'>
                    <Link to='/Metaforfica' className='flex flex-col gap-20'>
                        <p className='p-4 pb-0 pt-24 max-w-[900px]'>
                            Lorem ipsum dolor sit amet, augue vel maximus iaculis, a pharetra enim leo sed mauris. Suspendisse sapien dolor, tristique a dolor at, hendrerit feugiat leo. In at eros ligula. Duis at feugiat est. Nulla elit turpis, porta malesuada est vel, blandit volutpat sem. Nunc luctus ligula lectus. Donec a massa porttitor, placerat elit sit amet, varius velit. Ut mollis condimentum finibus.
                        </p>
                        <ContainerImg url={sedimentoUrl}></ContainerImg>
                    </Link>
                </div>
            </div>


            <div className='w-full relative flex' id='sedimentar'>
                <div className='w-[20%] h-full bg-zinc-600'>
                    <div className='w-[2px] h-[120%] absolute bg-zinc-500 left-[15%] -top-24 rounded-full'></div>
                    <div className='w-6 h-6 flex items-center justify-start absolute left-[13.7%] top-[50%] bg-white z-20'>
                        <div className='w-10 h-10 bg-white p-2 flex items-center justify-center'><GiMountains className='w-10 h-10'/></div>
                    </div>
                </div>
                
                <div className='flex flex-col relative w-[80%] pr-10 p-4 pb-0 pt-48'>
                    <Link to='/Sedimentos' className='flex flex-col gap-20'>
                        <p className=' max-w-[900px]'>
                            Lorem ipsum dolor sit amet, augue vel maximus iaculis, a pharetra enim leo sed mauris. Suspendisse sapien dolor, tristique a dolor at, hendrerit feugiat leo. In at eros ligula. Duis at feugiat est. Nulla elit turpis, porta malesuada est vel, blandit volutpat sem. Nunc luctus ligula lectus. Donec a massa porttitor, placerat elit sit amet, varius velit. Ut mollis condimentum finibus.
                        </p>
                        <ContainerImg url={metaforfica}></ContainerImg>
                    </Link>
                </div>
            </div>

            
            <footer className='h-16 bg-zinc-50 text-zinc-600 flex justify-center items-center mt-32'>
                Copyright 2022 | Schwanke
            </footer>
        </>
    )
}
