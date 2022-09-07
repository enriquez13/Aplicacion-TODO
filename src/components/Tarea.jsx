const Tareas = ({tarea, setTarea, eliminarTarea})=>{
    const {titulo, fecha, descripcion, id}= tarea;

    const handleEliminar = ()=>{
        const respuesta = confirm('¿Quiere eliminar esta tarea?')

        if(respuesta){
            eliminarTarea(id);
        }
    }

    return (
        <div className="rounded-lg ring-2 ring-slate-900/5 lg:mx-10 mb-5 px-5 py-10 reounded-lg ">
            <p className="font-bold mb-3 text-black uppercase">
                Título: {' '}
                <span className="font-normal normal-case">{titulo}</span>
            </p>
            <p className="font-bold mb-3 text-black uppercase">
                Fecha: {' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-black uppercase">
                Descripción: {' '}
                <span className="font-normal normal-case">{descripcion}
                </span>  
            </p>
            <div className="flex justify-center">
                <button className="bg-sky-800 hover:bg-sky-900 w-3/6 mt-5 mr-2 py-2 px-12 rounded-md text-white font-bold" 
                type="button"
                onClick={()=> setTarea(tarea)}>
                    Editar</button>
                <button className="bg-rose-700 hover:bg-rose-800 w-3/6 mt-5 ml-2 py-2 px-12 rounded-md text-white font-bold" type="button"
                onClick={handleEliminar}>
                    Eliminar</button>
            </div>
        </div>
    )
}

export default Tareas