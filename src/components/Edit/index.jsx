export function Edit() {

    return (
        <div className="pl-24 pt-4">
            <h1 className="text-3xl">Editar Post</h1>
            <div className="pl-7">
                <form className="flex my-8 items-center gap-4">
                    <div>
                        <input type="text" className="h-10" placeholder="Post id" />
                        <button type="submit" className="bg-blue-600 h-10 px-2 text-white rounded-r-lg">Procurar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}