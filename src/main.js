import { useEffect, useState } from "react"
import List from "./components/List"

function Main(){

   const [toDo, SetToDo] = useState("")
   const [list, setList] = useState(getLocalItems)

   function getLocalItems () {
      const list = localStorage.getItem("list")

      if(list){
         return(
            JSON.parse(localStorage.getItem("list"))
         )
      } else {
         return []
      }
   }
   useEffect(()=> {
      localStorage.setItem("list", JSON.stringify(list))
   }, [list])

   function handleChange(e) {
      const value = e.target.value

      SetToDo(value)
   }

   function handleSubmit(e) {
      e.preventDefault()
      
      const newToDo = {
         id: crypto.randomUUID(),
         task: toDo,
         completed:false
      }

      setList([...list, newToDo])
   }

   function handleUpdate(id,value) {
      const toDo = [...list]
      const item = toDo.find(item => item.id === id)
      item.task = value
      setList(toDo)
   }

   function handleDelete(id) {
      const toDo = list.filter(item => item.id !== id)

      setList(toDo)

   }

   return (
      <main>
         <h1>TO DO LIST</h1>
         <form className="form" onSubmit={handleSubmit}>
            <input className="input" type="text" value={toDo} onChange={handleChange} />
            <button className="buttonTask">Add task</button>
         </form>
         <div>
            {
               list.map((item) =>(
                  <List key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
               ))
            }
         </div>
      </main>
   )
}
export default Main