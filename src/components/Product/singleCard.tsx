import {MDBBtn, MDBCardImage, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTooltip, MDBTypography} from "mdb-react-ui-kit";
import {useDispatch} from "react-redux";
import {CartActionTypes} from "../../Redux/actionTypes/cart.actionTypes.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SingleCard = ({fields}) => {
    const dispatch = useDispatch()
    const {brand, category, price, thumbnail, _id, quantity} = fields;
    console.log({_id, quantity})
    return (
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                    src={thumbnail}
                    fluid className="rounded-3" alt="Cotton T-shirt"/>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                    {(category as string).toUpperCase()}
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                    {(brand as string).toUpperCase()}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                    <MDBBtn className="px-3 me-2" onClick={() => dispatch({
                        type: CartActionTypes.DECREMENT_QUANTITY,
                        payload: {
                            _id
                        }
                    })}>
                        <MDBIcon fas icon="minus"/>
                    </MDBBtn>

                    <MDBInput value={quantity} min={0} type="number" label="Quantity"
                              onChange={(e) => dispatch({
                                  type: CartActionTypes.SET_QUANTITY,
                                  payload: {
                                      _id,
                                      quantity: Number(e.target.value)
                                  }
                              })}
                    />

                    <MDBBtn className="px-3 ms-2" onClick={() => dispatch({
                        type: CartActionTypes.INCREMENT_QUANTITY,
                        payload: {
                            _id
                        }
                    })}>
                        <MDBIcon fas icon="plus"/>
                    </MDBBtn>
                </div>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                    ${price}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="1" lg="1" xl="1" className="text-end" onClick={() => console.log('delete clicked')}>
                <MDBTooltip
                    wrapperProps={{size: "sm"}} wrapperClass="me-1 mb-2"
                    title="Remove item"
                >
                    <MDBIcon fas icon="trash"/>
                </MDBTooltip>
            </MDBCol>
        </MDBRow>

    );
};

export default SingleCard;