import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./Cart.tsx";
import {useSelector} from "react-redux";
import {TInitialCartState} from "./Redux/reducers/cart.reducer.ts";

function App() {
const state = useSelector((store:TInitialCartState) => store)
    console.log(state)
  return (
      <>
          <Cart/>
      </>
  )
}

export default App
