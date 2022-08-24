import { useState } from "react"
import { useEffect } from "react"

export function Home() {

    const [screenMove, setScreenMove] = useState()

    useEffect(() => {
        setScreenMove(window.scrollY)
    },[window.scrollY])

    if(screenMove > 200){
        console.log('dds')
    }

    return (
        <>
            <header className={`hidden md:flex px-6 h-[56px] w-full justify-between items-center bg-zinc-50 drop-shadow-md z-20 fixed`}>
                <span>Ignea</span>
                <span>v</span>
            </header>

            <section className=" bg-yellow-100 z-10">
                <div className="h-[100vh] w-[100vw] bg-ignea bg-no-repeat bg-bottom [background-size:200%]"> 
                    <h1 className='text-center text-3xl pt-20 drop-shadow-lg text-zinc-700'>Ignea</h1>
                </div>
            </section>

            <section className=" bg-green-100 z-10">
                <div className="h-[100vh] w-[100vw] bg-metaforfica bg-no-repeat bg-bottom [background-size:200%]"> 
                    <h1 className='text-center text-3xl pt-20 drop-shadow-lg text-zinc-700'>Metaforfica</h1>
                </div>
            </section>

            <section className=" bg-red-100 z-10">
                <div className="h-[100vh] w-[100vw] bg-sedimentar bg-no-repeat bg-bottom [background-size:200%]"> 
                    <h1 className='text-center text-3xl pt-20 drop-shadow-lg text-zinc-700'>Sedimentar</h1>
                </div>
            </section>
        </>
    )
}
