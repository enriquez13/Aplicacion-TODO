//import { useEffect } from "react"
import Tarea from "./Tarea"

const ListaTareas =({tareas, setTarea, eliminarTarea})=>{

 //   useEffect( ()=> {
   //     if(tareas.length>0){
            
 //       }
 //   }, [tareas])

    return (
        <div className="md:w-1/2 lg:w-1/2 mx-5 mb-10 md:h-screen  md:overflow-auto">
            
            {tareas && tareas.length ? (
                <>
                <h2 className="font-black text-2xl text-center mt-5 mb-5">Tareas por hacer</h2>
            
                {tareas.map((tarea)=>{
                    return(
                        <Tarea 
                            key={tarea.id}
                            tarea={tarea}
                            setTarea={setTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                })}
                </>
                ) : <h2 className="font-black text-2xl text-center mt-5 mb-5">No hay tareas por hacer</h2>}
            
            
        </div>
    )
}

export default ListaTareas; 