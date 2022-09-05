import { useState, useEffect} from "react"
import AlertError from "./AlertError";

const Form =({tareas, setTareas, tarea, setTarea})=>{

    const [titulo, setTitulo]= useState('');
    const [fecha, setFecha]= useState('');
    const [descripcion, setDescripcion]= useState('');

    const [error, setError]= useState(false);

    useEffect(()=>{
        if(Object.keys(tarea).length >0) {
            setTitulo(tarea.titulo)
            setFecha(tarea.fecha)
            setDescripcion(tarea.descripcion)
        }
    }, [tarea]);

    //para generar Id
    const generarId= ()=>{
        const id= Math.random().toString(12).substr(2);
        return id;
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if([titulo, fecha, descripcion].includes("")){
            setError(true)
            return;
        } 
        setError(false);

//creamos el objeto de tareas
        const objetoTareas = {
            titulo,
            fecha,
            descripcion,
        };

        if(tarea.id){
//editar tarea
            objetoTareas.id= tarea.id;

            const tareasActualizadas = tareas.map( tareaState => 
            tareaState.id === tarea.id ? objetoTareas : tareaState )
            
            setTareas(tareasActualizadas)
            setTarea({});


        }else{
//nuevo tarea
//Crea un id
            objetoTareas.id= generarId();
// guarda una copia de tareas y agrega una nueva tarea
        setTareas([...tareas, objetoTareas]);
        }



//limpiar formulario
        setTitulo('');
        setFecha('');
        setDescripcion('');
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-10">Creación de tareas </h2>

            <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && <AlertError><p>Se deben diligenciar todos los campos</p></AlertError>}
                <div className="mb-5">
                    <label htmlFor="titulo" className="block text-gray-700 uppercase font-bold">Título</label>
                    <input
                        id="titulo"
                        type="text" 
                        placeholder="Título de la tarea" 
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" 
                        value={ titulo }
                        onChange={ (e)=> setTitulo(e.target.value) } />
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha</label>
                    <input
                        id="fecha"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" 
                        value={ fecha }
                        onChange={ (e)=> setFecha(e.target.value) } />
                </div>
                <div className="mb-5">
                    <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold">Descripción</label>
                    <textarea
                        id="descripcion"
                        type="text" 
                        placeholder="Descripción de la tarea" 
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" 
                        value={ descripcion }
                        onChange={ (e)=> setDescripcion(e.target.value) } />
                </div>
                {tarea.id ? (
                    <input 
                    type="submit"
                    className="bg-blue-600 w-full p-2 text-white uppercase font-bold rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                    value="Actualizar tarea"
                />
                ) : (
                    <input 
                        type="submit"
                        className="bg-blue-600 w-full p-2 text-white uppercase font-bold rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                        value="Crear Tarea"
                    />
                )
                }
            </form>
        </div>
    )
}

export default Form