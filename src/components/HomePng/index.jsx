import styled from 'styled-components'

import oneUrl from '../../images/1-removebg-preview.png'
import twoUrl from '../../images/2-removebg-preview.png'
import threeUrl from '../../images/3-removebg-preview.png'
import fourUrl from '../../images/4-removebg-preview.png'
import fiveUrl from '../../images/5-removebg-preview.png'
import sixUrl from '../../images/6-removebg-preview.png'
import sevenUrl from '../../images/7-removebg-preview.png'
import eightUrl from '../../images/8-removebg-preview.png'
import nineUrl from '../../images/9-removebg-preview.png'

import { BiLinkExternal } from "react-icons/bi";

const ContainerImg = styled.div`
    width: 96px;
    height: 96px;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: contain;
`

export function HomePng() {
    return (
        <section className='w-[60%] flex flex-col items-center gap-14'>

            <div className='flex'>
                <div className='relative flex flex-col justify-between mx-8 row-start-1 rounded p-2 cursor-pointer hover:scale-110 transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={oneUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>

                <div className='relative mx-8 flex flex-col justify-between rounded p-2 cursor-pointer hover:scale-110  transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={twoUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>

                <div className='relative mx-8 flex flex-col justify-between row-start-2 rounded p-2 cursor-pointer hover:scale-110  transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={threeUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>
            </div>

            <div className='flex'>
                <div className='w-36 h-36'></div>
                <div className='relative flex flex-col mx-8 justify-between rounded p-2 cursor-pointer hover:scale-110 transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={fourUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>
                <div className='relative flex flex-col mx-8 justify-between rounded p-2 cursor-pointer hover:scale-110 transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={fiveUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>

                <div className='relative flex flex-col mx-8 justify-between rounded p-2 cursor-pointer hover:scale-110 transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={sixUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>
            </div>

            
            <div className='flex'>
                <div className='relative flex flex-col mx-8 justify-between rounded p-2 cursor-pointer hover:scale-110 transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={sevenUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>

                <div className='relative flex flex-col mx-8 justify-between rounded p-2 cursor-pointer hover:scale-110 transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={eightUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>

                <div className='relative flex flex-col mx-8 justify-between rounded p-2 cursor-pointer hover:scale-110 transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={nineUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>
            </div>

            <div className='flex'>
                <div className='w-36 h-36'></div>
                <div className='relative mx-8 flex flex-col justify-between rounded p-2 cursor-pointer hover:scale-110  transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={oneUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>
                <div className='relative mx-8 flex flex-col justify-between rounded p-2 cursor-pointer hover:scale-110  transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={twoUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>

                <div className='relative mx-8 flex flex-col justify-between rounded p-2 cursor-pointer hover:scale-110  transition-all hover:bg-white hover:shadow-lg'>
                    <BiLinkExternal className='absolute right-1 top-1 text-zinc-500'/>
                    <ContainerImg url={threeUrl}></ContainerImg>
                    <p className=''>lorem ipsum</p>
                </div>
            </div>

        </section>
    )
}