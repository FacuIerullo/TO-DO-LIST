import { useState } from "react"

function List ({item, onUpdate, onDelete}) {
    const [edit, setEdit] = useState(false)
    const [newValue, setNewValue] = useState(item.task)

    function handleSubmit (e) {
        e.preventDefault()
    }
    function handleChange(e) {
        const value = e.target.value
        setNewValue(value)
    }
    function handleCLick(e) {
        onUpdate(item.id, newValue)
        setEdit(false)
    }
    return(
        <div className="list">
            {edit? <form className="form" onSubmit={handleSubmit}>
                <input className="input" type="text" onChange={handleChange} value={newValue}/>
                <button className="buttonTask" onClick={handleCLick}>Update</button>
            </form>
            : 
            
            <div className="toDo">
                <span className="task">{item.task} </span>
                <button className="buttonEdit" onClick={()=> setEdit(true)}>Edit</button> 
                <button className="buttonDelete" onClick={()=> onDelete(item.id)}>Delete</button>
            </div> }
        </div>
    )
}

export default List