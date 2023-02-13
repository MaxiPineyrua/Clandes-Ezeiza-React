import { useState, useEffect } from "react"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import {  useParams } from "react-router-dom"
import ItemList from "../../ItemList/ItemList"

export const ItemListContainer  = ( {saludo} ) => {
   const [productos, setProductos] = useState([]) 
   const [loading, setLoading] = useState(true)
   const { categoryId } = useParams()

   useEffect(()=>{
      const firebaseQuerys = () => {
         const db = getFirestore()
         const queryCollection = collection(db, "productos")
         const queryCollectionFilter = categoryId ?  query(queryCollection, where("categoria", "==", categoryId)) : queryCollection         
                
         getDocs(queryCollectionFilter)
         .then(respuestaPromesa => {     
            setProductos(respuestaPromesa.docs.map(prod => ( { id: prod.id, ...prod.data() } )))
         })        
         .catch(err => console.log(err))
         .finally(()=> setLoading(false)) 
      }
      
      firebaseQuerys()
      
   },[categoryId])
    
   return (
      <div className="container">             
         {   loading 
            ? 
               <center>
                  <h1>Cargando...</h1>
               </center>
            :                
            <ItemList productos={productos}/>
            }
      </div>
   )
}
