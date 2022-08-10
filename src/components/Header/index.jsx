import { Link } from 'react-router-dom'

export function Header(props) {

    const scroll = props.scroll

    return (
        <header className={`fixed z-50 top-0 w-full h-16  px-[2%] flex items-center justify-evenly ${(scroll > 30 && 'shadow-md bg-[#fafafa]')} transition-all opacity-[.98]`}>
            
            {
                (scroll > 820 && scroll < 1420) ? (
                    <a href="#Ignea" className='h-9 flex items-center flex-col group justify-between curos'>
                        <p className='text-zinc-800 text-blue-500'>Ignea</p>
                        <div className='w-0 h-[1px] bg-blue-500 w-[80%] transition-all'></div>
                    </a>
                ) : (
                    <a href="#Ignea" className='h-9 flex items-center flex-col group justify-between curos'>
                        <p className='text-zinc-800 hover:text-blue-500'>Ignea</p>
                        <div className='w-0 h-[1px] bg-blue-500 group-hover:w-[80%] transition-all'></div>
                    </a>
                )
            }

            {
                (scroll > 1420 && scroll < 2275) ? (
                    <a href="#metaforfica" className='h-9 flex items-center flex-col group justify-between curos'>
                        <p className='text-zinc-800 text-blue-500'>Metáforfica</p>
                        <div className='w-0 h-[1px] bg-blue-500 w-[80%] transition-all'></div>
                    </a>
                ) : (
                    <a href="#metaforfica" className='h-9 flex items-center flex-col group justify-between curos'>
                        <p className='text-zinc-800 hover:text-blue-500'>Metáforfica</p>
                        <div className='w-0 h-[1px] bg-blue-500 group-hover:w-[80%] transition-all'></div>
                    </a>
                )
            }

            {
                (scroll > 2275 ) ? (
                    <a href="#sedimentar" className='h-9 flex items-center flex-col group justify-between curos'>
                        <p className='text-zinc-800 text-blue-500'>Sedimentar</p>
                        <div className='w-0 h-[1px] bg-blue-500 w-[80%] transition-all'></div>
                    </a>
                ) : (
                    <a href="#sedimentar" className='h-9 flex items-center flex-col group justify-between curos'>
                        <p className='text-zinc-800 hover:text-blue-500'>Sedimentar</p>
                        <div className='w-0 h-[1px] bg-blue-500 group-hover:w-[80%] transition-all'></div>
                    </a>
                )
            }
        </header>
    )
}