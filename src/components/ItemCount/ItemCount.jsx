import { useState } from "react"

const ItemCount = (initial=1, stock=10, onAdd) => {
   const [count, setCount] = useState (initial)

   const handleSumar = () => {
      if(count < stock){
         setCount (count + 1)
      }
   }

   const handleRestar = () => {
      if(count > initial){
         setCount (count - 1)
      }
   }

   const handleOnAdd = () => {
      onAdd(`Usted ha seleccionado: ${count}`)
   }


   return (
      <div className="card">
         <div className="card-body row">
            <div className="col">
               <button className="btn btn-outline-dark w-100" onClick={handleSumar}>+</button>
            </div>
            <div className="col">
               <center>
                  <label>{count}</label>
               </center>
            </div>
            <div className="col">
               <button className="btn btn-outline-dark w-100" onClick={handleRestar}>-</button>
            </div>
         </div>
         <div className="card-footer">
            <button className="btn btn-outline-dark w-100" onClick={handleOnAdd}>Agregar al Carrito</button>
         </div>         
      </div>
   )
}

export default ItemCount