import React from 'react';
import {FloatingLabel, Form} from "react-bootstrap";

const ProductInputForm = (
    {register, handleSubmit, onSubmit}: {
        register: any,
        handleSubmit: any,
        onSubmit: any
    }) => {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Title"
                    className="mb-3"
                >
                    <Form.Control type="text"
                                  placeholder={'Iphone 19 pro max ultra'}
                                  {...register("title", {required: true})}/>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Price (USD)"
                    className="mb-3"
                >
                    <Form.Control type="number"
                                  placeholder={'99999'}
                                  {...register("price", {required: true})}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Description"
                    className="mb-3"
                >
                    <Form.Control
                        as="textarea"
                        style={{height: '100px'}}
                        type="text"
                        placeholder={'About Iphone 19 pro max ultra '}
                        {...register("description", {required: true})}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Brand"
                    className="mb-3"
                >
                    <Form.Control type="text"
                                  placeholder={'Apple'}
                                  {...register("brand")}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Category"
                    className="mb-3"
                >
                    <Form.Control type="text"
                                  placeholder={'Electronics'}
                                  {...register("category")}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="DiscountPercentage"
                    className="mb-3"
                >
                    <Form.Control type="number"
                                  placeholder={'99999'}
                                  {...register("discountPercentage", {required: true})}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Rating"
                    className="mb-3"
                >
                    <Form.Control type="number"
                                  placeholder={'99999'}
                                  {...register("rating", {required: true})}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Stock"
                    className="mb-3"
                >
                    <Form.Control type="number"
                                  placeholder={'99999'}
                                  {...register("stock", {required: true})}/>
                </FloatingLabel>
                <input className={'btn btn-outline-dark mt-3'} type="submit"/>
            </form>
        </div>
    );
};

export default ProductInputForm;