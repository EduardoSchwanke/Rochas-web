import { useContext } from "react"
import { useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import api from '../../services/api'
import { useNavigate  } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();
    const { setLogin } = useContext(UserContext)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    async function validatedUser(e) {
        e.preventDefault()

        const user = {
            name,
            password
        }

        try{
            await api.post('/user', user)

            setLogin(true)
            navigate('/createpost')
        }catch(err){
            alert('usuario ou senha incorretos')
        }
    }

    return (
        <div className="h-[100vh] w-full flex justify-center items-center bg-blue-100">
            <form onSubmit={validatedUser} className="max-w-sm bg-white flex flex-col items-center py-12 px-6 gap-4 rounded">
                <input type="text" placeholder="Name" className="w-full" onChange={(e) => setName(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        
                <button type="submit" className="bg-blue-600 w-full h-10 text-white rounded">
                    Entrar
                </button>
                
            </form>
        </div>
    )
}