import { Link } from "react-router-dom";

export function PostsContainer({id, title, description}) {
    return (
        <div className="max-w-2xl bg-zinc-300 p-5 rounded">
            <Link to={`/post/${id}`}>
                <h2 className="text-3xl mb-2 cursor-pointer hover:underline">{title}</h2>
                
                <span className="overflow-hidden text-ellipsis line-clamp-5 cursor-pointer hover:underline">
                    {description}
                </span>
            </Link>
        </div>
    )
}