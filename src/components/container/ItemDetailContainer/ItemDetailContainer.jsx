import { getSingleitem } from "../../../firebase/firebase.js";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
   const [ producto, setProducto ] =  useState({})
   const {detailId} = useParams()

   useEffect(() => {
      getSingleitem(detailId)
        .then(resp => setProducto(resp))
    }, [])

   return (
      <div className="border border-4 border-success">
         <ItemDetail producto={producto} />
      </div>
   )
}

export default ItemDetailContainer
