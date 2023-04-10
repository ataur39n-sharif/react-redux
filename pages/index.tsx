import Head from 'next/head'
import Products from "../Components/Products";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TProductState} from "../Redux/reducers/Products/productsReducers";
import {loadAllProducts} from "../Redux/thunk/productThunk";
import {ThunkDispatch} from "redux-thunk";
import {TProductActionHandlers} from "../Redux/actions/Products/actionHandlerType";
import {allFetchRequest} from "../Redux/actions/Products/productActions";
import toast from "react-hot-toast";

export default function Home() {
    const {products, loading, error, reload} = useSelector((state: TProductState) => state)
    const dispatch = useDispatch<ThunkDispatch<TProductState, any, TProductActionHandlers>>()
    const {limit, page} = products


    useEffect(() => {
        dispatch(allFetchRequest())
    }, [])

    useEffect(() => {
        page && reload && dispatch(loadAllProducts(page, 8))
    }, [reload])

    useEffect(() => {
        if (loading) {
            toast.loading('Data fetching...')
        } else if (error) {
            toast.dismiss()
            toast.error(error)
        } else {
            toast.dismiss()
        }
    }, [loading])

    return (
        <div>
            <Head>
                <title>React-Redux</title>
                <meta name="description" content="My React-Redux project"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={'container'}>
                <h1 className={'mb-5'}>My ecommerce project</h1>
                <div>
                    {
                        products && <Products products={products.data}/>
                    }

                </div>
            </main>

        </div>
    )
}
