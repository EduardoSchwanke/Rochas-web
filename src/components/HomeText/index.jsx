
import background from '../../images/bg-init.png'

export function HomeText() {
    return(
        <section className={`relative w-[40%] h-[90vh] flex flex-col gap-3 justify-center bg-[url('../../../src/images/bg-init.png')] bg-cover bg-right`}>
            <div className='flex flex-col gap-3 justify-center px-8'>
                <h1 className='text-4xl text-white drop-shadow-styled'>Ciclo das Rochas</h1>
                <p className='text-white drop-shadow-styled'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis elementum elit in mattis. Aenean vitae convallis nisl. Nunc dapibus, augue vel maximus iaculis, quam metus iaculis odio, a pharetra enim leo sed mauris. Suspendisse sapien dolor, tristique a dolor at, hendrerit feugiat leo. In at eros ligula. Duis at feugiat est. Nulla elit turpis, porta malesuada est vel, blandit volutpat sem. Nunc luctus ligula lectus. Donec a massa porttitor, placerat elit sit amet, varius velit. Ut mollis condimentum finibus.
                </p>
            </div>
        </section>
    )
}