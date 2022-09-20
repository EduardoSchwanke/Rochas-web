import { useState } from 'react'
import api from '../../services/api'

import Dropzone from 'react-dropzone'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase'

export function CreatePost() {
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [imgURL, setImgURL] = useState([])
    const [progresss, setProgress] = useState()

    async function addPost(e) {
        console.log(imgURL)
        e.preventDefault()
        if(!title || ! type || !description){
           return alert('preencha todos os campos!')
        }

        const post = {
            title,
            description,
            type,
            imgURL
        }

        try{ 
            const res = await api.post('/posts', post)
            alert(res.data)
            setTitle('')
            setImgURL([])
        }catch(err){
            alert(err.message)
        }
    }

    /*function handleUpload(files) {
        const uploadfile = files.map((file) => ({
            file,
            name: file.name,
            preview: url + file.name,
            ur: URL.createObjectURL(file)
        }))
        
        const random = uploadfile.map(({name}) => {
            return name 
        })
        setPhoto(random)
        setUploadFiles(uploadfile)
        uploadfile.forEach(processUpload)
    }

    function processUpload(uploadedFile) {
        const formData = new FormData()
        formData.append('photo', uploadedFile.file)

        const res = api.post('/postImage', formData)
    }*/

    function handleUpload(files) {
        files.map((file) => {
            const storageRef = ref(storage, `images/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setProgress(progress)
                },
                error => {
                    alert(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        setImgURL((imgURL) => [
                            ...imgURL,
                            url
                        ])
                    })
                }
            )
        })
    }

    return (
        <div className="pl-24 pt-4">
            <h1 className="text-3xl">Criar Post</h1>
            <div className="pl-7">
                <form onSubmit={addPost} className="pt-8 pr-10 flex flex-col gap-16">
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-2xl">Title</label>
                        <input 
                            type="text" 
                            className="border-r-0 border-l-0 border-t-0 border-b-2" 
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>

                    <div className="flex flex-col w-72">
                        <select name="" id="" onChange={(e) => setType(e.target.value)}>
                            <option value="">Escolha um tipo</option>
                            <option value="sedimento">Sedimento</option>
                            <option value="ignea">Ignea</option>
                            <option value="metaforfica">metaforfica</option>
                        </select>
                    </div>
 
                    <div className="flex flex-col gap-3">
                        <label htmlFor="" className="text-2xl">Descrição</label>
                        <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>


                    <div className="flex flex-col gap-3">
                        <label htmlFor="" className="text-2xl">Imagem principal</label>
                        <Dropzone onDropAccepted={handleUpload}>
                            {
                                ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                                    <div {...getRootProps()} className='border-dashed border-zinc-400 border max-w-xl p-6'>
                                        <input {...getInputProps()} />
                                        <p className='text-zinc-500'>Images aqui!</p>
                                    </div>
                                )
                            }
                        </Dropzone>
                        {!imgURL && <progress value={progresss} max="100" />}
                        <ul className='flex flex-col gap-4'>
                          {imgURL && imgURL.map((url) => (
                                <img key={url} src={url} alt="" className='w-24'/>
                            ))}
                        </ul>
                    </div> 

                    <button type="submit" className="mb-24 mt-6 bg-blue-600 w-52 h-12 rounded text-white">Criar post</button>
                </form>
            </div>
        </div>
    )
}
