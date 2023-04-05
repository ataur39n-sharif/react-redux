import React, {useState} from 'react';
import axios from "axios";
import Products from "../../Components/Products";

const SearchResult = () => {
    const [text, setText] = useState('')
    const [result, setResult] = useState([])
    const handleChange = async (value: string) => {
        const data = await axios.get(`https://anxious-erin-shrug.cyclic.app/api/products/search?q=${value}`)
        setResult(data.data)
    }

    return (
        <div className={'container text-center w-100'}>

            <div className={'d-flex justify-content-center'}>
                <input placeholder={'Search anything what you need and Hit "Enter"'} type="text"
                       className={'form-control text-center w-50'}
                       onChange={(e) => setText(e.target.value)}
                       onKeyDown={(e) => e.key === 'Enter' && handleChange(text)}
                />

            </div>
            <p className={'p-5'}>showing result - {result.length}</p>
            <Products products={result}/>

        </div>
    );
};

export default SearchResult;