
import React,{useState} from "react"
import{stringify, v4 as uuidv4} from "uuid"

export const Color=()=>{
const [value,setvalue]=useState("")
const [ array,setarray]=useState([])
localStorage.setItem("colores",JSON.stringify(array))

 const ingresar=(e)=>{
    e.preventDefault()

   let valuecolor={
    color:value,
    id:uuidv4()
   }
   let Guardar=[valuecolor,...array]
   setarray(Guardar)
   console.log(array)
   
   
 }
 const input=(e)=>{
   setvalue(e.target.value)
   

     
 }
 
 const eliminar=(id)=>{
let borrar= array.filter((item)=>item.id!==id)
 setarray(borrar)
 }

    return(
    <>
    <main>
    <div className="div-administrarcolor">
        <h3>Administrar Colores</h3>
        <hr />
        <div className="box">
         <div className="color">

         </div>
    <form action="" onSubmit={ingresar}>
      <input type="text" placeholder="Ingrese un Color ej Blue" onChange={input} />
      <button onSubmit={ingresar} className="btn btn-primary">Ingresar</button>
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