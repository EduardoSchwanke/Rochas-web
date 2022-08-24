import { CreatePost } from "../../components/CreatePost"
import { Edit } from "../../components/Edit"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { List } from "../../components/List"
import { Delete } from "../../components/Delete"

export function DashboardPost() {

    return (
        <>
            <Sidebar/>
            {
                (nav === 'create') && <CreatePost/> 
            }
            {
                (nav === 'edit') && <Edit/>
            }
            {
                (nav === 'list') && <List/>
            }
            {
                (nav === 'delete') && <Delete/>
            }
        </>
    )
}  