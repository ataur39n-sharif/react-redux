import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type {AppProps} from 'next/app'
import Navbar from "../Components/Navbar";
import {Toaster} from "react-hot-toast";

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Toaster/>
        <Navbar/>
        <Component {...pageProps} />
    </>

}
