import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./Cart.tsx";
import {useSelector} from "react-redux";
import {TInitialCartState} from "./Redux/reducers/cart.reducer.ts";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
const state = useSelector((store:TInitialCartState) => store)
    const [products,setProducts] = useState([])
    console.log(state)
    useEffect(()=>{
        axios.get(`https://anxious-erin-shrug.cyclic.app/api/products?limit=4&page=${Math.round(Math.random()*10)}`)
            .then(response => setProducts(response.data.products))
            .catch(err => console.log(err))
    },[])
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
    return (
      <>
          <Cart products={products} />
      </>
  )
}

export default App
