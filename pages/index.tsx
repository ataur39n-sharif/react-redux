import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todo from "../Components/Todo";
import {Col, Row} from "react-bootstrap";
import Blogs from "../Components/Blogs";
import {useEffect} from "react";
import {loadPosts} from "../Redux/Thunk/jsonPlaceholderThunk";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {toast} from "react-hot-toast";

export default function Home() {
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>()
    useEffect(() => {
        dispatch(loadPosts())
            .then(res => toast.success('Successfully all post loaded.'))
            .catch(err => console.log(err.message))
    }, [dispatch])
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="My redux project"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={'mb-5'}>React-Redux</h1>
                <Row>
                    <Col>
                        <Blogs/>
                    </Col>
                    <Col>
                        <Todo/>
                    </Col>
                </Row>
            </main>

        </div>
    )
}
