import Head from 'next/head'
import Products from "../Components/Products";

export default function Home() {

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
                    <Products/>
                </div>
            </main>

        </div>
    )
}
