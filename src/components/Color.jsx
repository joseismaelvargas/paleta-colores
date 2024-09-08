
import React,{useState} from "react"
import{stringify, v4 as uuidv4} from "uuid"
import { useForm } from "react-hook-form"

export const Color=()=>{
    const { register, handleSubmit ,formState:{errors}} = useForm();
    const[entrada,setEntrada]=useState([])
    
const [ array,setarray]=useState([])
localStorage.setItem("colores",JSON.stringify(array))

 const ingresar=(data,e)=>{
    e.preventDefault()
    e.target.reset()


       let valuecolor={
      color:data.colores,
    id:uuidv4()
   }


   setEntrada([valuecolor,...entrada])


   let Guardar=[valuecolor,...array]
   setarray(Guardar)
   
   setvalue("")
 
   
 }

 
 const eliminar=(id)=>{
let borrar= array.filter((item)=>item.id!==id)
 setarray(borrar)
 }

    return(
    <>
    <main className="main container">
    <div className="div-administrarcolor">
        <h3>Administrar Colores</h3>
        <hr />
        <div className="box">
         <div style={{
            
                width: "100px",
                height:" 100px",
                backgroundColor:`blue`,
                border: "solid 2px black",
                margin: "0px 10px",
              
         }}>

         </div>
    <form action="" onSubmit={handleSubmit(ingresar)}>  <p>@ismaelvargas</p>
      <input type="text" placeholder="Ingrese un Color ej Blue" name="colores" {
        ...register("colores",{
            required:{value:true,message:"No deje este Espacio vacio"},
            minLength:{value:2,message:"Datos incorrectos"}
        })
      } /> 
    
      <span style={{color:"red"}} >{errors.colores&&errors.colores.message};
      </span> 
      <button type="submit" className="btn btn-primary">Ingresar</button>
    </form>    
        </div>
    
    </div>
    <section className="container">
         {
        array.map((element)=>
         <div key={element.id} style={
         {
            width: "220px" ,
            height:" 180px",
            border:  `solid 2px ${element.color}`,
            display:" flex",
            flexDirection: "column",
            margin: "10px 10px",
             borderRadius :"5px",
             boxShadow : `3px 5px 3px ${element.color}`
          }
         }  >
            <p style={{
                fontFamily:"sans-serif",
                fontWeight:"bold",
                color:element.color
            }}>{element.color}</p>
            <div  style={{
                width: "80px",
                height: "80px",
                border: "solid 3px black",
                margin:"0px 60px" ,
                 backgroundColor: element.color,
              }}></div>
            <button className="borrar btn btn-danger" onClick={()=>eliminar(element.id)}>Borrar</button>
         </div>  )
    }
  
    </section>
   </main>
    
    </>
)
}