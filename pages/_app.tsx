import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {TodoStore} from "../Redux/Todo/store";

export default function App({Component, pageProps}: AppProps) {
    return <Provider store={TodoStore}>
        <Component {...pageProps} />
    </Provider>
}
