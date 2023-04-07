import Head from 'next/head'
import Products from "../Components/Products";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function Home() {
    const [data, setData] = useState({
        products: []
    })
    const [active, setActive] = useState(1)
    const [others, setOthers] = useState({});
    useEffect(() => {
        toast.dismiss()
        toast.loading('Data fetching.....')
        fetch(`https://anxious-erin-shrug.cyclic.app/api/products?limit=8&page=${active}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setOthers({
                    total: data.total,
                    limit: data.limit,
                    page: data.page,
                })
                setActive(data?.page)
                toast.dismiss()
            })
            .catch(err => console.log(err));
    }, [active])

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
                    <Products products={data?.products} others={others} status={[active, setActive]}/>
                </div>
            </main>

        </div>
    )
}
