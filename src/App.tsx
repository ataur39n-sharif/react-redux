import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./Cart.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {TRootState} from "./Redux/reducers/rootReducer.ts";
import {fetchProducts} from "./Redux/thunk/product/product.thunk.ts";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

function App() {
    const state = useSelector((store: TRootState) => store.cart)
    const dispatch = useDispatch<ThunkDispatch<TRootState, any, AnyAction>>()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <Cart products={state.products}/>
        </>
    )
}

export default App
