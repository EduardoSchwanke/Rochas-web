import { useEffect, useState } from "react"
import api from "../../services/api"

export function Delete() {
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')

    const [display, setDisplay] = useState(false)
    const [id, setId] = useState('')
    const [rochas, setRochas] = useState([]) 
    const [rochaId, setRocha] = useState({}) 

    useEffect(()=> {
        async function getPots(){
            const res = await api.get('/posts')
            setRochas(res.data.posts)
        }

        getPots()
    }, [])

    function getStone(e){
        e.preventDefault()

        rochas.map((rocha) => {
            if(rocha._id === id){
                
                setDisplay(true)
                setRocha(rocha) 
            }
        })

    }

    async function deletePost() {
        try{
            await api.delete(`/posts/${id}`)
            alert('deletado com sucesso')
        }catch(err){
            alert(err.message)
        }
    }

    return (
        <div className="pl-24 pt-4">
            <h1 className="text-3xl">Deletar rochas</h1>
            <div className="pl-7">
                <form className="flex my-8 items-center gap-4" onSubmit={getStone}>
                    <div>
                        <input type="text" className="h-10" placeholder="Post id" onChange={(e) => {setId(e.target.value)}}/>
                        <button type="submit" className="bg-blue-600 h-10 px-2 text-white rounded-r-lg">Procurar</button>
                    </div>
                </form>

                <div className={`pt-8 pr-10 flex flex-col gap-16 ${!display ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex flex-col p-4 border rounded-lg ">
                        <p>Rocha: {rochaId.title}</p>
                    </div>
                    <button onClick={deletePost} className="mb-24 mt-6 bg-blue-600 w-52 h-12 rounded text-white">Deletar</button>
                </div>
            </div>
        </div>
    )
}