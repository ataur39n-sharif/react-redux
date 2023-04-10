import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type {AppProps} from 'next/app'
import Navbar from "../Components/Navbar";
import {Toaster} from "react-hot-toast";
import {Provider} from "react-redux";
import {store} from "../Redux/store";

export default function App({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <Toaster/>
        <Navbar/>
        <Component {...pageProps} />
    </Provider>

}
